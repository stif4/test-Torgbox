import React from "react";
import ElectronicClock from "../../components/Clock/ElectronicClock/ElectronicClock";
import MehanicalClock from "../../components/Clock/MehanicalClock/MehanicalClock";
import useMehanicalClock from "./hooks/useMehanicalClock";
import useElectronicClock from "./hooks/useElectronicClock";

export default function Clock() {
  const { dataTime, setTDOfDataTime } = useElectronicClock();
  const { refs, setHandsOfClock } = useMehanicalClock();

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
