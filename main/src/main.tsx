import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyRouter from "./router";
import NavBar from "./NavBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <MyRouter />
  </React.StrictMode>
);
