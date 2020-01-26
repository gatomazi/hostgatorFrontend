import React from "react";

import { Button, Radio } from "@material-ui/core";

const Tabs = ({ tabs, active, setActive }) => {
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

export { Tabs };
