import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  planCard: {
    backgroundColor: "#000",
    height: 100,
    borderColor: "red",
    borderRadius: 5
  }
}));

const Plano = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        <Grid className={classes.planCard} item xs={12}></Grid>
      </Container>
    </div>
  );
};

export default Plano;
