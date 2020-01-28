import React from "react";
import { Grid, Container } from "@material-ui/core";
import CheckIcon from "./CheckIcon";

import "./Banner.scss";

const Banner = () => {
  return (
    <div className="root">
      <div className="classHeroesBg">
        <div className="rootBanner afterBg">
          <Container className="mdContainer" maxWidth="md">
            <div className="titleBanner">Hospedagem de Sites</div>
            <div style={{ fontSize: 30, marginBottom: 30, fontWeight: "bold" }}>
              Tenha uma hospedagem de sites estável e <br></br>
              evite perder visitantes diariamente
            </div>
            <div>
              <div>
                <CheckIcon className="checkIcon" />
                <span className="txtBanner">
                  99,9% de disponibilidade: seu site sempre no ar
                </span>
              </div>

              <span>
                <CheckIcon className="checkIcon" />
                <span className="txtBanner">Suporte 24h, todos os dias</span>
              </span>
              <span>
                <CheckIcon className="checkIcon" />
                <span className="txtBanner">Painel de Controle cPanel</span>
              </span>
            </div>
          </Container>
        </div>
      </div>
      <div className="beforeArrow">
        <div className="arrow-down">
          <a className="arrow-link" href="#plans"></a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
