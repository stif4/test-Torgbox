import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { fetchTimezone } from "../store/slices/timezone/timezoneActions";
import { getTimezone } from "../store/slices/timezone/timezoneReducer";
import Spiner from "../components/shared/spiner/Spiner";

interface IAppLoader {
  children: React.ReactNode;
}

function AppLoader({ children }: IAppLoader) {
  const { isLoading, timezoneList } = useSelector(getTimezone());
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchTimezone());
  }, []);

  if (timezoneList.content === null || isLoading) {
    return <Spiner />;
  }

  return <>{children}</>;
}
export default AppLoader;
