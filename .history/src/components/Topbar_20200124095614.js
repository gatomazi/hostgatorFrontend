import React from "react";

import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({}) => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-brand col-1">
        <img src={logo} className="Navbar-logo" alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
