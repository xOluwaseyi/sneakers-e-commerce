import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SneakersContextProvider } from "./store/sneakers-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SneakersContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SneakersContextProvider>
);
