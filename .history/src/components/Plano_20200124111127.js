import React from "react";
import "./Plano.scss";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Plano = () => {
  const classes = useStyles();
  return (
    <div className="root">
      <Container maxWidth="xs">
        <Grid className="orangePlanBg" item xs={12}>
          <div className={classes.planCard}>
            <div>Plano M</div>
            <div className={classes.insideDivisor}>Contrate Agora</div>
            <div className={} style={{ textAlign: "left" }}>
              <div>Sites Ilimitados</div>
              <div>100 GB de Armazenamento</div>
              <div>Contas de E-mail Ilimitadas</div>
              <div>Criador de Sites Grátis</div>
              <div>Certificado SSL Grátis (https)</div>
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

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
    // height: 100,
    borderColor: borderColor,
    borderStyle: "solid",
    border: 1,
    borderRadius: 5
  },
  insideDivisor: {
    borderBottomColor: borderColor,
    borderBottomStyle: "solid",
    borderBottom: 0.5,
    borderTopColor: borderColor,
    borderTopStyle: "solid",
    borderTop: 0.5
  }
}));

export default Plano;
