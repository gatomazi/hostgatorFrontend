import React from "react";

import logo from "../logo.svg";
// import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const Topbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid item xs={12} style={{ textAlign: "left" }}>
          <img
            style={{ maxHeight: 50 }}
            src={logo}
            className="Navbar-logo"
            alt="logo"
          />
        </Grid>
      </Container>
    </div>
  );
};

export default Topbar;
