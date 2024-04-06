import { ITimezoneOptions } from "../hooks/useTransformDataClock";

function getCurrentTimezone() {
  const offset = new Date().getTimezoneOffset();
  const sign = offset > 0 ? "-" : "+";
  const hours = Math.abs(Math.floor(offset / 60));
  const formattedOffset = `${sign}${hours}`;
  return formattedOffset;
}

export default function getCurrentTimezoneFromOptions(
  timeZoneOptions: ITimezoneOptions[]
) {
  const currentTimezone = getCurrentTimezone();
  const option = timeZoneOptions.find(
    (timeZone) => timeZone.value === currentTimezone
  );
  return option ? option : timeZoneOptions[0];
}
