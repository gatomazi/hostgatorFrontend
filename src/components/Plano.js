import React from "react";
import "./Plano.scss";

import { Grid, Container, Tabs, Tab } from "@material-ui/core";

import PlanoCard from "./PlanoCard";
import TabPanel from "./TabPanel";

var mock = {
  shared: {
    products: {
      planoP: {
        name: "Plano P",
        id: 5,
        cycle: {
          monthly: {
            priceRenew: "24.19",
            priceOrder: "24.19",
            months: 1
          },
          semiannually: {
            priceRenew: "128.34",
            priceOrder: "128.34",
            months: 6
          },
          biennially: {
            priceRenew: "393.36",
            priceOrder: "393.36",
            months: 24
          },
          triennially: {
            priceRenew: "561.13",
            priceOrder: "561.13",
            months: 36
          },
          quarterly: {
            priceRenew: "67.17",
            priceOrder: "67.17",
            months: 3
          },
          annually: {
            priceRenew: "220.66",
            priceOrder: "220.66",
            months: 12
          }
        }
      },
      planoM: {
        name: "Plano M",
        id: 6,
        cycle: {
          monthly: {
            priceRenew: "29.69",
            priceOrder: "29.69",
            months: 1
          },
          semiannually: {
            priceRenew: "159.54",
            priceOrder: "159.54",
            months: 6
          },
          biennially: {
            priceRenew: "532.56",
            priceOrder: "532.56",
            months: 24
          },
          triennially: {
            priceRenew: "764.22",
            priceOrder: "764.22",
            months: 36
          },
          quarterly: {
            priceRenew: "82.77",
            priceOrder: "82.77",
            months: 3
          },
          annually: {
            priceRenew: "286.66",
            priceOrder: "286.66",
            months: 12
          }
        }
      },
      planoTurbo: {
        name: "Plano Turbo",
        id: 335,
        cycle: {
          monthly: {
            priceRenew: "44.99",
            priceOrder: "44.99",
            months: 1
          },
          semiannually: {
            priceRenew: "257.94",
            priceOrder: "257.94",
            months: 6
          },
          biennially: {
            priceRenew: "983.76",
            priceOrder: "983.76",
            months: 24
          },
          triennially: {
            priceRenew: "1439.64",
            priceOrder: "1439.64",
            months: 36
          },
          quarterly: {
            priceRenew: "131.97",
            priceOrder: "131.97",
            months: 3
          },
          annually: {
            priceRenew: "503.88",
            priceOrder: "503.88",
            months: 12
          }
        }
      }
    }
  }
};

function valuesToArray(obj) {
  return Object.keys(obj).map(key => obj[key]);
}

const Plano = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const passProps = index => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  };

  var plansFiltered = Object.keys(mock.shared.products).map(
    (namePlan, index) => {
      return mock.shared.products[namePlan];
    }
  );

  var cycles = Object.keys(plansFiltered[0]["cycle"]).map(
    (nameCycle, index) => {
      let arrReturn = [];
      let month = plansFiltered[0]["cycle"][nameCycle]["months"];
      arrReturn["nameCycle"] = nameCycle;
      arrReturn["qtyMonths"] = month;
      if (month >= 12) {
        let calcYear = month / 12;
        arrReturn["formattedCycle"] =
          calcYear > 1 ? calcYear + " anos" : calcYear + " ano";
      } else {
        arrReturn["formattedCycle"] =
          month > 1 ? month + " meses" : month + " mês";
      }
      return arrReturn;
    }
  );

  var plans = plansFiltered.map((plan, index) => (
    <Grid item xs={4}>
      <div className="orangePlanBg">
        {/* <Grid item lg={4}> */}
        <PlanoCard
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          key={index}
          plan={plan}
        />
      </div>
    </Grid>
  ));

  function createPlan(qtyMonth) {
    return plansFiltered.map((plan, index) => (
      <Grid item xs={4}>
        <div className="orangePlanBg">
          {/* <Grid item lg={4}> */}
          <PlanoCard
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            key={index}
            plan={plan}
          />
        </div>
      </Grid>
    ));
  }

  var tabPanels = cycles.map((nameCycle, index) => (
    <TabPanel style={{ padding: 0 }} value={value} index={index}>
      {plans}
    </TabPanel>
  ));

  return (
    <div className="root">
      <Tabs
        className="tabStyle"
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        centered
      >
        {cycles.map((cycleInfo, index) => (
          <Tab label={cycleInfo["formattedCycle"]} {...passProps(index)} />
        ))}
        {/* <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
      </Tabs>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {plans}
        </Grid>
      </Container>
    </div>
  );
};

export default Plano;
