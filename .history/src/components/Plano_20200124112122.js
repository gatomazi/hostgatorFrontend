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
            <div>Plano M</div>
            <div className="insideDivisor">Contrate Agora</div>
            <div style={{ textAlign: "left" }}>
              <div>Sites Ilimitados</div>
              <div>
                <b>100 GB</b> de Armazenamento
              </div>
              <div>
                Contas de E-mail <b>Ilimitadas</b>
              </div>
              <div>
                Criador de Sites <b>Grátis</b>
              </div>
              <div>
                Certificado SSL <b>Grátis</b> (https)
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

const borderColor = "#ddd";

export default Plano;
