import React from "react";
import "./PlanoCard.scss";

import iconPlan from "../assets/icon.png";

const PlanoCard = ({ planoInfo = {}) => {
    <div className="planCard">
      <div>
        <img
          style={{ height: 50 }}
          src={iconPlan}
          className="Navbar-logo"
          alt="logo"
        />
        <span>Plano M</span>
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
  
};

export default PlanoCard;
