import React from "react";
import "./PlanoCard.scss";

import { CalcValues } from "../helpers/currency";

import iconPlan from "../assets/icon.png";
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
          style={{ height: 50 }}
          src={iconPlan}
          className="Navbar-logo"
          alt="logo"
        />
        <div className="fontDestaque blueFont">{plan["name"]}</div>
      </div>
      <div className="insideDivisor defaulPadding">
        <div>
          <span style={{ textDecoration: "line-through" }}>
            {arrValues["originalPrice"]}
          </span>{" "}
          <span>
            <b>{arrValues["valueWDDiscount"]}</b>
          </span>
        </div>
        <div>equivalente a</div>
        <div className="blueFont">
          <span className="fontDestaque">{arrValues["valueMonth"]}</span>
          /mês*
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
        <div>1 ano de Domínio Grátis</div>
        <div>
          <span className="economizeTxt blueFont">
            economize {arrValues["valueTotalDiscount"]}{" "}
          </span>
          <span className="tagOff">{(pctDiscount - 1) * 100 * -1}% OFF</span>
        </div>
      </div>
      <div className="defaulPadding" style={{ textAlign: "left" }}>
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
