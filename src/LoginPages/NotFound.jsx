import React from "react";
import page from "../../public/404 Page Not Found _Two Color 1.svg";
import frame from "../../public/Frame 56629.svg";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-24">
      <NavLink to="/">
        <img src={frame} alt="logo" />
      </NavLink>
      <img src={page} alt="logo" />
    </div>
  );
};

export default NotFound;
