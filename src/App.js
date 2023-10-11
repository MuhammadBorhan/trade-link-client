import React from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "./Routers/Routes/Routes";

function App() {
  return (
    <div className="scroll-smooth">
      <RouterProvider router={router} />
      <ToastContainer theme="dark" position="top-left" autoClose={3000} />
    </div>
  );
}

export default App;
