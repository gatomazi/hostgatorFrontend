import React from "react";
import { withRouter } from "react-router-dom";
import { getPlans } from "../services/api";

import "./Plano.scss";
import PlanoCard from "./PlanoCard";
import { Tabs } from "./Tabs";

import { Grid, Container } from "@material-ui/core";

import AutorenewIcon from "@material-ui/icons/Autorenew";

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

      this.changePlan(1);
    });
  };

  filterPlans = () => {
    let plansFiltered = Object.keys(this.state.plansApi.shared.products).map(
      (namePlan, index) => {
        return this.state.plansApi.shared.products[namePlan];
      }
    );
    this.setState({ plansFiltered });
  };

  changePlan = monthIndex => {
    this.setState({
      plans: this.createPlans(monthIndex),
      activePlan: monthIndex
    });
  };

  createPlans = monthIndex => {
    return this.state.plansFiltered.map((plan, index) => {
      let planCycle = this.createCyclesPlan(index, monthIndex);
      return (
        <Grid
          key={index}
          item
          // md={4}
          // sm={6}
          // xs={12}
        >
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

  createCyclesPlan = (indexPlan, monthIndex) => {
    console.log("Create cycles plan index Cycle: ", monthIndex);
    let arrReturn = [];
    Object.keys(this.state.plansFiltered[indexPlan]["cycle"]).map(
      (nameCycle, index) => {
        let month = this.state.plansFiltered[indexPlan]["cycle"][nameCycle][
          "months"
        ];
        if (
          monthIndex === month &&
          (month === 36 || month === 12 || month === 1)
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

  redirectTo = val => {
    this.props.history.push("/" + val);
  };

  componentDidMount() {
    //Remove anchor
    if (this.props.location.hash !== "") {
      this.props.history.push("/");
    }
    this.startUpFunctions();
  }
  render() {
    return (
      <div id="plans" className="root">
        <Container maxWidth="lg">
          {this.state.plansFiltered ? (
            <>
              <div className="tabsRoot">
                <div className="monthSelect">Quero pagar a cada:</div>
                <div className="tabsBar">
                  <Tabs
                    plansFiltered={this.state.plansFiltered}
                    active={this.state.activePlan}
                    setActive={this.changePlan}
                  />
                </div>
                <Grid className="containerPlans" container spacing={3}>
                  {this.state.plans}
                </Grid>
              </div>
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
