import React from "react";
import "./ElectronicClock.scss";

interface IElectronicClockProps {
  ss: string;
  mm: string;
  hh: string;
}

export default function ElectronicClock(props: IElectronicClockProps) {
  const { ss, mm, hh } = props;

  return (
    <div className="Eclock">
      <div className="Eclock__container">
        <div className="Eclock__hour">{hh}:</div>
        <div className="Eclock__min">{mm}:</div>
        <div className="Eclock__sec">{ss}</div>
      </div>
    </div>
  );
}
