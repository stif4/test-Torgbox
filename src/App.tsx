import React from "react";
import MehanicalClock from "./components/Clock/MehanicalClock/MehanicalClock";
import "./index.scss";
import ElectronicClock from "./components/Clock/ElectronicClock/ElectronicClock";

const App = () => {
  return (
    <div className="app">
      <div className="cards">
        <div className="cards__card">
          <MehanicalClock />
          <ElectronicClock />
        </div>

        <div className="cards__card">
          <MehanicalClock />
          <ElectronicClock />
        </div>
      </div>
    </div>
  );
};

export default App;
