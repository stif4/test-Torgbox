import React from "react";
import useFetchDataClock, { ITimezoneOptions } from "./useTransformDataClock";
import getCurrentTimezoneFromOptions from "../utils/transformTimezone";

export default function useTimezoneClock() {
  const { timeZoneOptions } = useFetchDataClock();

  const [currentTimezone, setCureentTimeZone] =
    React.useState<ITimezoneOptions>();

  React.useEffect(() => {
    const timezone = getCurrentTimezoneFromOptions(timeZoneOptions);
    setCureentTimeZone(timezone);
  }, [timeZoneOptions]);

  return { currentTimezone, timeZoneOptions, setCureentTimeZone };
}
