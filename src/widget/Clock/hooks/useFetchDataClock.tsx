import React from "react";

const URL = "bd/timeZones.json";

export interface ITimezoneOptions {
  value: string;
  label: string;
}

interface ITimezoneListResponse {
  timezone: string;
  name: string;
}

export default function useFetchDataClock() {
  const [timeZoneOptions, setTimeZoneOptions] = React.useState<
    ITimezoneOptions[]
  >([]);

  const transformData = (data: ITimezoneListResponse[]) => {
    return data.map((zone) => ({
      value: zone.timezone,
      label: zone.name,
    }));
  };

  const fetchDataTimeZone = async () => {
    const resonse = await fetch(URL);
    const data = (await resonse.json()) as ITimezoneListResponse[];
    const dataTransformed = transformData(data);

    setTimeZoneOptions(dataTransformed);
  };

  React.useEffect(() => {
    fetchDataTimeZone();
  }, []);

  return { timeZoneOptions };
}
