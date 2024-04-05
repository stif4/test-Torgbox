import React from "react";
import { addZero } from '../utils/addZero';
import "./ElectronicClock.scss";

interface IDataTime {
  ss: string;
  mm: string;
  hh: string;
}

const INITIAL_DATA_TIME = {
  ss: "00",
  mm: "00",
  hh: "00",
};

export default function ElectronicClock() {
  const [dataTime, setDataTime] = React.useState<IDataTime>(INITIAL_DATA_TIME);

  React.useEffect(() => {

    const IntervalId = setInterval(() => {
      let day = new Date();

      let ss = addZero(day.getSeconds());
      let mm = addZero(day.getMinutes());
      let hh = addZero(day.getHours());

      setDataTime({ ss, mm, hh });
    });

    return () => clearInterval(IntervalId);
  }, []);

  return (
    <div className="Eclock">
      <div className="Eclock__container">
        <div className="Eclock__hour">{dataTime.hh}:</div>
        <div className="Eclock__min">{dataTime.mm}:</div>
        <div className="Eclock__sec">{dataTime.ss}</div>
      </div>
    </div>
  );
}
