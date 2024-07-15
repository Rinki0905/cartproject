import React from 'react'
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import store from './redux/Store.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7cbci6ylqowvkb12.us.auth0.com"
      clientId="DHCcahZNbzjqIyFAUAIFEWQv5xmqIJBk"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
