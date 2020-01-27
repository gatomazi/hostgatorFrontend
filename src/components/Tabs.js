import React from "react";

import { Button, Radio } from "@material-ui/core";

const Tabs = ({ plansFiltered, active, setActive }) => {
  let tabs = CreateTabs(plansFiltered);
  return (
    <>
      {tabs.map((cycleInfo, index) => (
        <Button
          key={index}
          onClick={() => setActive(index)}
          className={active === index ? "tabBtn activeTab" : "tabBtn"}
        >
          <Radio
            checked={active === index}
            value={index}
            name="radio-selected-plan"
            className="radioTab"
          />
          {cycleInfo["formattedCycle"]}
        </Button>
      ))}
    </>
  );
};

const CreateTabs = plansFiltered => {
  let arrReturn = [];
  console.log(plansFiltered);
  Object.keys(plansFiltered[0]["cycle"]).map((nameCycle, index) => {
    let arrAux = [];
    let month = plansFiltered[0]["cycle"][nameCycle]["months"];

    if (month === 36 || month === 12 || month === 1) {
      arrAux["months"] = month;
      arrAux["nameCycle"] = nameCycle;
      if (month >= 12) {
        let calcYear = month / 12;
        arrAux["formattedCycle"] =
          calcYear > 1 ? calcYear + " anos" : calcYear + " ano";
      } else {
        arrAux["formattedCycle"] =
          month > 1 ? month + " meses" : month + " mês";
      }
      // arrReturn.push(arrAux);
      arrReturn[`${month}`] = arrAux;
    }
  });
  return arrReturn;
};

export { Tabs, CreateTabs };
