import React from "react";
import "./MehanicalClock.scss";

const DEGREE_OF_ROTATION = 6;

export default function MehanicalClock() {
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
    <div className="Mclock">
      <div className="Mclock__hour">
        <div className="Mclock__hr" ref={hr} />
      </div>
      <div className="Mclock__min">
        <div className="Mclock__mn" ref={mn} />
      </div>
      <div className="Mclock__sec">
        <div className="Mclock__sc" ref={sc} />
      </div>
    </div>
  );
}
