import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import "./styles/index.scss";
import App from "./App";
import { Provider } from 'react-redux'
import {store} from "../src/redux/store"


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <App />
  </Provider>,
)
