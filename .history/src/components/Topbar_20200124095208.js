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
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <Link onClick={handleClearSearch} to={`/search/`}>
        <div className="navbar-brand col-1">
          <img src={logo} className="Navbar-logo" alt="logo" />
        </div>
      </Link>

      <div className="form-group justify-content-center row col-9 my-2">
        <input
          value={searchString}
          onChange={handleSearchChange}
          // TODO: onChange deve atualizar a URL
          className="form-control col-10 mr-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  searchString: PropTypes.string
};
