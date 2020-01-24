import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({
  handleClearSearch,
  searchString,
  onSearchChange: handleSearchChange
}) => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark"></nav>
  );
};

Navbar.propTypes = {
  searchString: PropTypes.string
};
