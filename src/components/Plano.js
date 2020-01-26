import React from "react";
import "./Plano.scss";

import { Grid, Container, Button, Radio } from "@material-ui/core";

import PlanoCard from "./PlanoCard";

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

class Plano extends React.Component {
  // constructor(props) {
  //   super(props);
  state = {
    plans: null,
    activePlan: 0,
    selectedRadio: 0
  };
  // }

  plansFiltered = Object.keys(mock.shared.products).map((namePlan, index) => {
    return mock.shared.products[namePlan];
  });

  createCyclesPlan = (indexPlan, indexCycle) => {
    let arrReturn = [];
    Object.keys(this.plansFiltered[indexPlan]["cycle"]).map(
      (nameCycle, index) => {
        if (indexCycle === index) {
          let month = this.plansFiltered[indexPlan]["cycle"][nameCycle][
            "months"
          ];
          arrReturn["priceRenew"] = this.plansFiltered[indexPlan]["cycle"][
            nameCycle
          ]["priceRenew"];
          arrReturn["priceOrder"] = this.plansFiltered[indexPlan]["cycle"][
            nameCycle
          ]["priceOrder"];
          arrReturn["months"] = month;
          return arrReturn;
        }
      }
    );
    return arrReturn;
  };

  createPlans = indexCycle => {
    return this.plansFiltered.map((plan, index) => {
      let planCycle = this.createCyclesPlan(index, indexCycle);
      return (
        <Grid key={index} item xs={4}>
          <div className="orangePlanBg">
            <PlanoCard key={index} plan={plan} infoCycle={planCycle} />
          </div>
        </Grid>
      );
    });
  };

  mountCycleTab = Object.keys(this.plansFiltered[0]["cycle"]).map(
    (nameCycle, index) => {
      let arrReturn = [];
      let month = this.plansFiltered[0]["cycle"][nameCycle]["months"];

      arrReturn["nameCycle"] = nameCycle;
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

  changePlan = indexCycle => {
    this.setState({
      plans: this.createPlans(indexCycle),
      selectedRadio: indexCycle,
      activePlan: indexCycle
    });
    console.log(indexCycle);
  };

  tabs = this.mountCycleTab.map((cycleInfo, index) => {
    return (
      <Button
        key={index}
        onClick={() => this.changePlan(index)}
        className={
          this.state.activePlan === index ? "tabBtn activeTab" : "tabBtn"
        }
      >
        <Radio
          checked={this.state.selectedRadio === index}
          value={index}
          name="radio-selected-plan"
        />
        {cycleInfo["formattedCycle"]}
      </Button>
    );
  });

  componentDidMount() {
    this.changePlan(0);
  }

  render() {
    return (
      <div className="root">
        <Container maxWidth="md">
          <div className="tabsRoot">{this.tabs}</div>
          <Grid container spacing={3}>
            {this.state.plans}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Plano;
