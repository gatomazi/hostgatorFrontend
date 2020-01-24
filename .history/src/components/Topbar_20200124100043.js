import React from "react";

import logo from "../logo.svg";
// import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Topbar = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-brand col-1">
              <img
                style={{ height: 50 }}
                src={logo}
                className="Navbar-logo"
                alt="logo"
              />
            </div>
          </nav>
        </Grid>
      </Grid>
    </div>
  );
};

export default Topbar;
