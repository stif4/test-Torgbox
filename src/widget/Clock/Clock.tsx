import React from "react";
import CommonSelect from "../../components/shared/CommonSelect";
import ElectronicClock from "../../components/Clock/ElectronicClock/ElectronicClock";
import MehanicalClock from "../../components/Clock/MehanicalClock/MehanicalClock";
import useMehanicalClock from "./hooks/useMehanicalClock";
import useElectronicClock from "./hooks/useElectronicClock";
import useTimezoneClock from "./hooks/useTimezoneClock";
import "./Clock.scss";

export default function Clock() {
  const { dataTime, setTDOfDataTime } = useElectronicClock();
  const { refs, setHandsOfClock } = useMehanicalClock();
  const { currentTimezone, timeZoneOptions, setCureentTimeZone } =
    useTimezoneClock();

  React.useEffect(() => {
    const IntervalId = setInterval(() => {
      let date = new Date();

      if (currentTimezone) {
        const timezoneOffset = +currentTimezone.value;
        date.setUTCHours(date.getUTCHours() + timezoneOffset);
      }

      let ss = date.getSeconds();
      let mm = date.getMinutes();
      let hh = date.getUTCHours();

      setTDOfDataTime(ss, mm, hh);
      setHandsOfClock(ss, mm, hh);
    });

    return () => clearInterval(IntervalId);
  }, [currentTimezone]);

  return (
    <div className="Clock">
      <div className="Clock__container">
        <MehanicalClock ref={refs} />
        <ElectronicClock {...dataTime} />
        <CommonSelect
          value={currentTimezone}
          onChange={setCureentTimeZone}
          options={timeZoneOptions}
        />
      </div>
    </div>
  );
}
