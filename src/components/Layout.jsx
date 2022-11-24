import React from "react";
import Menu from "./menu/Menu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Menu />

      <Outlet />
    </>
  );
};

export default Layout;
