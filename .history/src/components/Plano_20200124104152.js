import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import "./Plano.css";
const Plano = () => {
  return (
    <div className="root">
      <Container maxWidth="xs">
        <Grid className="orangePlanBg" item xs={12}>
          <div className="planCard">
            <div>Plano M</div>
            <div className="insideDivisor">Contrate Agora</div>
            <div style={{ textAlign: "left" }}>
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

export default Plano;
