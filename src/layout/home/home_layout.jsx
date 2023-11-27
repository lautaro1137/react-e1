import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Outlet } from "react-router";

export const HomeLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />
        <div> {children} </div>
        <Footer />
      </div>
    </div>
  );
};
