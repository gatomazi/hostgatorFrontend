import React from "react";
import "./Plano.scss";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import PlanoCard from "./PlanoCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
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
const Plano = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = index => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  };

  var plans;
  Object.keys(mock.shared.products).map((namePlan, index) => (
    // console.log(mock.shared.products[namePlan]);

    // plans = Object.keys(mock.shared.products[namePlan]).map((item, index2) => (
    <TabPanel value={value} index={index}>
      <PlanoCard key={index} planInfo={mock.shared.products[namePlan]} />
    </TabPanel>
  ));
  //   });

  return (
    <div className="root">
      <Container maxWidth="xs">
        <Grid className="orangePlanBg" item xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
          {plans}
        </Grid>
      </Container>
    </div>
  );
};

export default Plano;
