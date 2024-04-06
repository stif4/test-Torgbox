import React from "react";
import { useSelector } from "react-redux";
import {
  ITimezoneListResponse,
  getTimezone,
} from "../../../store/slices/timezone/timezoneReducer";
export interface ITimezoneOptions {
  value: string;
  label: string;
}

export default function useTransformDataClock() {
  const { isLoading, error, timezoneList } = useSelector(getTimezone());
  const { content } = timezoneList;

  const [timeZoneOptions, setTimeZoneOptions] = React.useState<
    ITimezoneOptions[]
  >([]);

  const transformData = (data: ITimezoneListResponse[]) => {
    return data.map((zone) => ({
      value: zone.timezone,
      label: zone.name,
    }));
  };

  React.useEffect(() => {
    const contentTransformed = transformData(content);
    setTimeZoneOptions(contentTransformed);
  }, [content]);

  return { timeZoneOptions };
}
