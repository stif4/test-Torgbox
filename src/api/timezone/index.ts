import { ITimezoneListResponse } from "src/store/slices/timezone/timezoneReducer";

const URL = "db/timeZones.json";

export const timezoneGet = async (): Promise<ITimezoneListResponse[]> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(async () => {
        const resonse = await fetch(URL);
        const data = (await resonse.json()) as ITimezoneListResponse[];
        resolve(data);
      }, 2000);
    } catch (error) {
      reject("error");
    }
  });
};
