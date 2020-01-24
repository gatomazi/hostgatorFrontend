import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({
  handleClearSearch,
  searchString,
  onSearchChange: handleSearchChange,
  handleClickLogin,
  usrStr = ""
}) => {