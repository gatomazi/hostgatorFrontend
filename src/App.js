import React from "react";

import "./App.css";
import Topbar from "./components/Topbar";
import Banner from "./components/Banner";
import Plano from "./components/Plano";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Banner />
      <Plano />
    </div>
  );
}

export default App;
