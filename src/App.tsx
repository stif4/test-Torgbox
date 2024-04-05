import React from "react";
import Clock from "./widget/Clock/Clock";
import "./index.scss";

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
