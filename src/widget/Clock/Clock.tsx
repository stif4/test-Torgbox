import React from "react";
import ElectronicClock from "../../components/Clock/ElectronicClock/ElectronicClock";
import MehanicalClock from "../../components/Clock/MehanicalClock/MehanicalClock";
import { addZero } from "../../components/Clock/utils/addZero";

export interface IRefs {
  hr: HTMLDivElement | null;
  mn: HTMLDivElement | null;
  sc: HTMLDivElement | null;
}

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

const DEGREE_OF_ROTATION = 6;

export default function Clock() {
  const [dataTime, setDataTime] = React.useState<IDataTime>(INITIAL_DATA_TIME);
  const refs = React.useRef<IRefs>(null);

  const setHandsOfClock = (ss: number, mm: number, hh: number) => {
    let degSs = ss * DEGREE_OF_ROTATION;
    let degMm = mm * DEGREE_OF_ROTATION;
    let degHh = hh * 30 + mm / 12;

    if (refs) {
      refs.current.hr.style.transform = `rotateZ(${degHh}deg)`;
      refs.current.mn.style.transform = `rotateZ(${degMm}deg)`;
      refs.current.sc.style.transform = `rotateZ(${degSs}deg)`;
    }
  };

  const setTDOfDataTime = (ss: number, mm: number, hh: number) => {
    setDataTime({ ss: addZero(ss), mm: addZero(mm), hh: addZero(hh) });
  };

  React.useEffect(() => {
    const IntervalId = setInterval(() => {
      let day = new Date();

      let ss = day.getSeconds();
      let mm = day.getMinutes();
      let hh = day.getHours();

      setTDOfDataTime(ss, mm, hh);
      setHandsOfClock(ss, mm, hh);
    });

    return () => clearInterval(IntervalId);
  }, []);

  return (
    <div className="Clock">
      <div className="Clock__container">
        <MehanicalClock ref={refs} />
        <ElectronicClock {...dataTime} />
      </div>
    </div>
  );
}
