import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CustomBrowserRouter } from "./_helpers/history";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <CustomBrowserRouter>
      <App />
    </CustomBrowserRouter>
  // </React.StrictMode>
);
