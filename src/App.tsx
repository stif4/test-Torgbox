import React from "react";
import Clock from "./widget/Clock/Clock";
import "./index.scss";

const INITIAL_VALUE_CLOCK = [<Clock />, <Clock />];

const App = () => {
  const [countClock, setCountClock] = React.useState(INITIAL_VALUE_CLOCK);

  const isAddClock = countClock.length < 24;

  const addClock = () => {
    if (isAddClock) {
      setCountClock((prev) => [...prev, <Clock />]);
    }
  };

  return (
    <div className="app">
      <div className="cards">
        {countClock.map((clock, index) => (
          <div className="cards__card" key={index}>
            {clock}
          </div>
        ))}

        {isAddClock && (
          <div className="cards__card">
            <Clock isButton onClick={addClock} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
