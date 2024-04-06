import React from "react";
import { ClockLoader } from "react-spinners";
import "./Spiner.scss";

export default function Spiner() {
  return (
    <div className="Spiner">
      <div className="Spiner__container">
        <ClockLoader color="#ffc600" size={100} />
      </div>
    </div>
  );
}
