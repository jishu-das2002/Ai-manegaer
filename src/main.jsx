import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router"; 
import router from "./Routes/Router.jsx"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

<ToastContainer />


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
);
