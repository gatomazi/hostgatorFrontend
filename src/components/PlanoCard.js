import React from "react";
import "./PlanoCard.scss";

import { CalcValues } from "../helpers/currency";

import iconPlan from "../assets/plan-icon.svg";
import iconInfo from "../assets/info-icon.svg";
import { Button } from "@material-ui/core";

const PlanoCard = ({ plan, infoCycle, handleRedirect }) => {
  let pctDiscount = 0.6;

  let arrValues = CalcValues(
    infoCycle["priceOrder"],
    infoCycle["months"],
    pctDiscount
  );

  return (
    <div className="planCard">
      <div className="defaulPadding">
        <img
          style={{ height: 40 }}
          src={iconPlan}
          className="Navbar-logo"
          alt="logo"
        />
        <div className="blueFont" style={{ fontSize: 26, fontWeight: "bold" }}>
          {plan["name"]}
        </div>
      </div>
      <div className="insideDivisor defaulPadding">
        <div className="totalPrices">
          <span style={{ textDecoration: "line-through" }}>
            {arrValues["originalPrice"]}
          </span>{" "}
          <span>
            <b>{arrValues["valueWDDiscount"]}</b>
          </span>
          <div>equivalente a</div>
        </div>
        <div className="blueFont">
          <span style={{ fontSize: 35, fontWeight: "bold" }}>
            {arrValues["valueMonth"]}
          </span>
          <span style={{ fontSize: 20 }}>/mês*</span>
        </div>

        <Button
          className="btnContrate"
          onClick={() =>
            handleRedirect(
              `?a=add&pid=${plan["id"]}&billingcycle=${infoCycle["cycle"]}&promocode=PROMOHG40`
            )
          }
        >
          Contrate Agora
        </Button>
        <div className="freeDomain">
          1 ano de Domínio Grátis{" "}
          <img
            src={iconInfo}
            style={{ position: "relative", top: 2 }}
            alt="logo"
          />
        </div>
        <div>
          <span className="economizeTxt blueFont">
            economize {arrValues["valueTotalDiscount"]}{" "}
          </span>
          <span className="tagOff">{(pctDiscount - 1) * 100 * -1}% OFF</span>
        </div>
      </div>
      <div className="defaulPadding infoPlan" style={{ textAlign: "left" }}>
        <div>
          <span>Sites Ilimitados</span>
        </div>
        <div>
          <b>100 GB</b> de Armazenamento
        </div>
        <div>
          <span>
            Contas de E-mail <b>Ilimitadas</b>
          </span>
        </div>
        <div>
          Criador de Sites <b>Grátis</b>
        </div>
        <div>
          Certificado SSL <b>Grátis</b> (https)
        </div>
      </div>
    </div>
  );
};

export default PlanoCard;
