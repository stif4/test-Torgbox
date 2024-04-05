import React from "react";
import "./index.scss";
import MehanicalClock from "./components/Clock/MehanicalClock/MehanicalClock";

const App = () => {
  return (
    <div className="app">
      <div className="cards">
        <div className="cards__card">
          <MehanicalClock />
        </div>

        <div className="cards__card">
          <MehanicalClock />
        </div>
      </div>
    </div>
  );
};

export default App;
