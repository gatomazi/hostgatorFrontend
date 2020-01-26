import React from "react";
import { Grid, Container } from "@material-ui/core";
import { Tabs } from "./Tabs";
import PlanoCard from "./PlanoCard";
import { getPlans } from "../services/api";
import { withRouter } from "react-router-dom";
import CachedIcon from "@material-ui/icons/Cached";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import "./Plano.scss";

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
  state = {
    plans: null,
    activePlan: 0,
    plansApi: null,
    plansFiltered: null
  };

  startUpFunctions = () => {
    getPlans().then(data => {
      this.setState({ plansApi: data });
      this.filterPlans();

      this.changePlan(0);
    });
  };

  filterPlans = () => {
    let plansFiltered = Object.keys(this.state.plansApi.shared.products).map(
      (namePlan, index) => {
        return mock.shared.products[namePlan];
      }
    );
    this.setState({ plansFiltered });
  };

  changePlan = indexCycle => {
    this.setState({
      plans: this.createPlans(indexCycle),
      activePlan: indexCycle
    });
  };

  createPlans = indexCycle => {
    return this.state.plansFiltered.map((plan, index) => {
      let planCycle = this.createCyclesPlan(index, indexCycle);
      return (
        <Grid key={index} item xs={4}>
          <div className="orangePlanBg">
            <PlanoCard
              key={index}
              plan={plan}
              handleRedirect={this.redirectTo}
              infoCycle={planCycle}
            />
          </div>
        </Grid>
      );
    });
  };

  createCyclesPlan = (indexPlan, indexCycle) => {
    let arrReturn = [];
    Object.keys(this.state.plansFiltered[indexPlan]["cycle"]).map(
      (nameCycle, index) => {
        let month = this.state.plansFiltered[indexPlan]["cycle"][nameCycle][
          "months"
        ];
        if (
          indexCycle === index
          // &&
          // (month === 36 || month === 12 || month === 1)
        ) {
          arrReturn["priceRenew"] = this.state.plansFiltered[indexPlan][
            "cycle"
          ][nameCycle]["priceRenew"];
          arrReturn["priceOrder"] = this.state.plansFiltered[indexPlan][
            "cycle"
          ][nameCycle]["priceOrder"];
          arrReturn["months"] = month;
          arrReturn["cycle"] = nameCycle;
          return arrReturn;
        }
      }
    );
    return arrReturn;
  };

  getCyclesTabs = () => {
    let arrReturn = [];

    Object.keys(this.state.plansFiltered[0]["cycle"]).map(
      (nameCycle, index) => {
        let arrAux = [];
        let month = this.state.plansFiltered[0]["cycle"][nameCycle]["months"];

        // if (month === 36 || month === 12 || month === 1) {
        arrAux["nameCycle"] = nameCycle;
        if (month >= 12) {
          let calcYear = month / 12;
          arrAux["formattedCycle"] =
            calcYear > 1 ? calcYear + " anos" : calcYear + " ano";
        } else {
          arrAux["formattedCycle"] =
            month > 1 ? month + " meses" : month + " mês";
        }
        arrReturn.push(arrAux);
        // }
      }
    );
    return arrReturn;
  };

  redirectTo = val => {
    this.props.history.push("/" + val);
  };

  componentDidMount() {
    this.startUpFunctions();
  }

  render() {
    // this.mountCycleTab = this.getCycles();
    return (
      <div id="plans" className="root">
        <Container maxWidth="md">
          {this.state.plansFiltered ? (
            <>
              <div className="tabsRoot">
                <Tabs
                  tabs={this.getCyclesTabs()}
                  active={this.state.activePlan}
                  setActive={this.changePlan}
                />
              </div>
              <Grid container spacing={3}>
                {this.state.plans}
              </Grid>
            </>
          ) : (
            <AutorenewIcon className="loadingIcon" />
          )}
        </Container>
      </div>
    );
  }
}

export default withRouter(Plano);
