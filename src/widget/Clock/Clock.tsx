import React from "react";
import ElectronicClock from "../../components/Clock/ElectronicClock/ElectronicClock";
import MehanicalClock from "../../components/Clock/MehanicalClock/MehanicalClock";
import CoomonSelect from "../../components/shared/CommonSelect";
import useMehanicalClock from "./hooks/useMehanicalClock";
import useElectronicClock from "./hooks/useElectronicClock";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Clock() {
  const { dataTime, setTDOfDataTime } = useElectronicClock();
  const { refs, setHandsOfClock } = useMehanicalClock();

  const [selectedOption, setSelectedOption] = React.useState(null);

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
        <CoomonSelect
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
    </div>
  );
}
