import React from "react";
import "./PlanoCard.scss";

import iconPlan from "../assets/icon.png";
import { Button } from "@material-ui/core";

const PlanoCard = ({ plan, infoCycle, handleRedirect }) => {
  function formatCurrency(value) {
    let newValue = parseFloat(value);
    return "R$ " + String(newValue.toFixed(2)).replace(".", ",");
  }

  var pctDiscount = 0.6;

  var valueWDDiscount = infoCycle["priceOrder"] * pctDiscount;
  var valueMonth = valueWDDiscount / infoCycle["months"];
  var valueTotalDiscount = infoCycle["priceOrder"] - valueWDDiscount;

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
            {formatCurrency(infoCycle["priceOrder"])}
          </span>{" "}
          <span>
            <b>{formatCurrency(valueWDDiscount)}</b>
          </span>
        </div>
        <div>equivalente a</div>
        <div className="blueFont">
          <span className="fontDestaque">{formatCurrency(valueMonth)}</span>
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
            economize {formatCurrency(valueTotalDiscount)}{" "}
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
