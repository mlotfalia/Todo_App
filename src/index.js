import "./index.css";

import { persistor, store } from "./store";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import reportWebVitals from "./reportWebVitals";

axios.defaults.baseURL = `https://62a1c619efe73bc8bc250c23.endapi.io`;
//if there is not response after 5 second, cancel the request
axios.defaults.timeout = 5000;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
