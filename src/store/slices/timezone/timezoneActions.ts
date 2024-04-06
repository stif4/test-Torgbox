import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import api from "../../../api";
import {
  ITimezoneListResponse,
  fetchTimezoneError,
  fetchTimezoneStart,
  fetchTimezoneSuccess,
} from "./timezoneReducer";

export const fetchTimezone =
  (): ThunkAction<
    Promise<ITimezoneListResponse[] | undefined>,
    RootState,
    unknown,
    AnyAction
  > =>
  async (dispatch) => {
    try {
      dispatch(fetchTimezoneStart());
      const res = await api.timezone();
      dispatch(fetchTimezoneSuccess(res));
      return res;
    } catch (e: any) {
      dispatch(fetchTimezoneError("error"));
      throw new Error(e.message);
    }
  };
