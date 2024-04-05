import React from "react";
import "./clock.scss";

const DEGREE_OF_ROTATION = 6;

export default function Clock() {
  const hr = React.useRef(null);
  const sc = React.useRef(null);
  const mn = React.useRef(null);

  React.useEffect(() => {
    const IntervalId = setInterval(() => {
      let day = new Date();

      let ss = day.getSeconds() * DEGREE_OF_ROTATION;
      let mm = day.getMinutes() * DEGREE_OF_ROTATION;
      let hh = day.getHours() * 30 + mm / 12;

      if (hr && mn && sc) {
        hr.current.style.transform = `rotateZ(${hh}deg)`;
        mn.current.style.transform = `rotateZ(${mm}deg)`;
        sc.current.style.transform = `rotateZ(${ss}deg)`;
      }
    });

    return () => clearInterval(IntervalId);
  }, []);

  return (
    <div className="clock">
      <div className="clock__hour">
        <div className="clock__hr" id="hr" ref={hr} />
      </div>
      <div className="clock__min">
        <div className="clock__mn" id="mn" ref={mn} />
      </div>
      <div className="clock__sec">
        <div className="clock__sc" id="sc" ref={sc} />
      </div>
    </div>
  );
}
