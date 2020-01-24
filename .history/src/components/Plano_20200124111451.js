import React from "react";
import "./Plano.scss";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Plano = () => {
  return (
    <div className="root">
      <Container maxWidth="xs">
        <Grid className="orangePlanBg" item xs={12}>
          <div className="planCard">
            <div>Plano M</div>
            <div className="insideDivisor">Contrate Agora</div>
            <div style={{ textAlign: "left" }}>
              <span>Sites Ilimitados</span>
              <span>100 GB de Armazenamento</span>
              <span>Contas de E-mail Ilimitadas</span>
              <span>Criador de Sites Grátis</span>
              <span>Certificado SSL Grátis (https)</span>
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

const borderColor = "#ddd";

export default Plano;
