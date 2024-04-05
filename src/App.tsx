import React from "react";
import "./index.scss";
import Clock from "./components/Clock/Clock";

const App = () => {
  return (
    <div className="app">
      <div className="cards">
        <div className="cards__card">
          <Clock />
        </div>

        <div className="cards__card">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default App;
