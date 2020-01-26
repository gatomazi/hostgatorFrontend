import React from "react";

import logo from "../assets/logo-hg.svg";
// import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    width: "198px",
    height: "35px",
    paddingTop: 5,
    paddingBottom: 5
  }
}));

const Topbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid item xs={12} style={{ textAlign: "left" }}>
          <img src={logo} className={classes.logo} alt="logo" />
        </Grid>
      </Container>
    </div>
  );
};

export default Topbar;
