import React from "react";
import { Grid, Container } from "@material-ui/core";
import { Tabs } from "./Tabs";
import PlanoCard from "./PlanoCard";
import { getPlans } from "../services/api";
import { withRouter } from "react-router-dom";
import CachedIcon from "@material-ui/icons/Cached";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import "./Plano.scss";
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

  orderArr(arr, index) {
    arr.sort(function(a, b) {
      return b[index] - a[index];
    });
    arr.reverse();
    return arr;
  }

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

  getCyclesTabs = () => {
    let arrReturn = [];

    Object.keys(this.state.plansFiltered[0]["cycle"]).map(
      (nameCycle, index) => {
        let arrAux = [];
        let month = this.state.plansFiltered[0]["cycle"][nameCycle]["months"];

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
      }
    );
    return arrReturn;
    // return arrReturn;
  };

  redirectTo = val => {
    this.props.history.push("/" + val);
  };

  componentDidUpdate() {
    this.props.location.hash = "";
  }
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
        <Container maxWidth="md">
          {this.state.plansFiltered ? (
            <>
              <div className="tabsRoot">
                <div className="tabsBar">
                  <Tabs
                    tabs={this.getCyclesTabs()}
                    active={this.state.activePlan}
                    setActive={this.changePlan}
                  />
                </div>
                <Grid container spacing={3}>
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
