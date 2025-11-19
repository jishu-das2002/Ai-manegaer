import React from "react";
import { Outlet } from "react-router"; // ✅ react-router-dom
import Navbar from "../components/navbar";
import Footer from "../components/Footer";


const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Root;
