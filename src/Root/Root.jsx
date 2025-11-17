import React from "react";
import { Outlet } from "react-router"; // ✅ react-router-dom
import Navbar from "../components/navbar";


const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
};

export default Root;
