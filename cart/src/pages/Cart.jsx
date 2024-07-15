
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/Cartslice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);
  const handleremove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h3>Cart Page</h3>
      <div className="cartWrapper">
        {cartitems.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div className="cartCard">
            <img src={item.image} alt="img" />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleremove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
