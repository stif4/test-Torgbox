import React from "react";
import { addZero } from "../../../components/Clock/utils/addZero";

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

export default function useElectronicClock() {
  const [dataTime, setDataTime] = React.useState<IDataTime>(INITIAL_DATA_TIME);

  const setTDOfDataTime = (ss: number, mm: number, hh: number) => {
    setDataTime({ ss: addZero(ss), mm: addZero(mm), hh: addZero(hh) });
  };

  return { dataTime, setTDOfDataTime };
}
