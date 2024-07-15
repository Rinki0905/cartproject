import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/Cartslice";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button className="btn" onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
          <h2>Welcome, {user.name}</h2>
        </>
      ) : (
        <button onClick={loginWithRedirect}>Log In</button>
      )}
      <div className="productsWrapper">
        {product.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt="img" />
            <h4>{p.title}</h4>
            <h5>
              <span>₹</span>
              {p.price}
            </h5>
            <button className="btn" onClick={() => handleAdd(p)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
