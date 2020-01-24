import React from "react";
import "./Plano.scss";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import iconPlan from "../assets/icon.png";

const Plano = () => {
  return (
    <div className="root">
      <Container maxWidth="xs">
        <Grid className="orangePlanBg" item xs={12}>
          <div className="planCard">
            <div>
              <span>Sites Ilimitados</span>
              <span>
                <b>100 GB</b> de Armazenamento
              </span>
              <span>
                Contas de E-mail <b>Ilimitadas</b>
              </span>
              <span>
                Criador de Sites <b>Grátis</b>
              </span>
              <span>
                Certificado SSL <b>Grátis</b> (https)
              </span>
            </div>
            <div className="insideDivisor">Contrate Agora</div>
            <div style={{ textAlign: "left" }}>
              <span>Sites Ilimitados</span>
              <span>
                <b>100 GB</b> de Armazenamento
              </span>
              <span>
                Contas de E-mail <b>Ilimitadas</b>
              </span>
              <span>
                Criador de Sites <b>Grátis</b>
              </span>
              <span>
                Certificado SSL <b>Grátis</b> (https)
              </span>
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

const borderColor = "#ddd";

export default Plano;
