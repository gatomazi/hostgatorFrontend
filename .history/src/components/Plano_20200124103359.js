import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const borderColor = "#ddd";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  orangePlanBg: {
    backgroundColor: "orange",
    paddingBottom: 5,
    paddingTop: 10,
    borderRadius: 5
  },
  planCard: {
    backgroundColor: "#fff",
    height: 100,
    borderColor: borderColor,
    borderStyle: "solid",
    border: 1,
    borderRadius: 5
  },
  insideDivisor: {
    borderBottomColor: "#cdcdcd",
    borderBottomStyle: "solid",
    borderBottom: 0.5,
    borderTopColor: "#ddd",
    borderTopStyle: "solid",
    borderTop: 0.5
  }
}));

const Plano = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        <Grid className={classes.orangePlanBg} item xs={12}>
          <div className={classes.planCard}>
            <div>Plano M</div>
            <div className={classes.insideDivisor}>Contrate Agora</div>
            <div>Informações</div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Plano;
