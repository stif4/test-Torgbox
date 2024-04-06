import React from "react";
import CommonSelect from "../../components/shared/CommonSelect";
import ElectronicClock from "../../components/Clock/ElectronicClock/ElectronicClock";
import MehanicalClock from "../../components/Clock/MehanicalClock/MehanicalClock";
import useMehanicalClock from "./hooks/useMehanicalClock";
import useElectronicClock from "./hooks/useElectronicClock";
import useTimezoneClock from "./hooks/useTimezoneClock";
import "./Clock.scss";

interface IClockProps {
  isButton?: boolean;
  onClick?: () => void;
}

export default function Clock({ isButton, onClick }: IClockProps) {
  const { dataTime, setTDOfDataTime } = useElectronicClock();
  const { refs, setHandsOfClock } = useMehanicalClock();
  const { currentTimezone, timeZoneOptions, setCureentTimeZone } =
    useTimezoneClock();

  React.useEffect(() => {
    const intervalId = setInterval(() => {
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

    return () => clearInterval(intervalId);
  }, [currentTimezone]);

  return (
    <div className="Clock">
      <div
        className="Clock__container"
        style={isButton ? { opacity: 0.2 } : {}}
      >
        <MehanicalClock ref={refs} />
        <ElectronicClock {...dataTime} />
        <CommonSelect
          value={currentTimezone}
          onChange={setCureentTimeZone}
          options={timeZoneOptions}
          isDisabled={isButton}
        />
      </div>
      {isButton && (
        <img
          src="../icons/Group.svg"
          className="Clock__button"
          onClick={onClick}
        />
      )}
    </div>
  );
}
