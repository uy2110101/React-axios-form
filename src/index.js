import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { AuthProvider } from "./Context/AuthProvider";

ReactDOM.render(
 <React.StrictMode>
  <AuthProvider>
    <App/>
  </AuthProvider>
 </React.StrictMode>,
  document.getElementById("root")
);
