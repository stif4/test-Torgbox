import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

export interface ITimezoneListResponse {
  timezone: string;
  name: string;
}

export interface ITimezone {
  timezoneList: {
    content: ITimezoneListResponse[] | null;
  };
  isLoading: boolean;
  error: string | null;
}

const initialState: ITimezone = {
  timezoneList: {
    content: null,
  },
  isLoading: false,
  error: null,
};

export const timezoneReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchTimezoneStart: (state: ITimezone) => {
      state.isLoading = true;
      state.timezoneList.content = null;
      state.error = null;
    },

    fetchTimezoneSuccess: (
      state: ITimezone,
      action: PayloadAction<ITimezoneListResponse[]>
    ) => {
      state.timezoneList.content = action.payload;
      state.isLoading = false;
    },

    fetchTimezoneError: (state: ITimezone, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchTimezoneStart, fetchTimezoneSuccess, fetchTimezoneError } =
  timezoneReducer.actions;

export const getTimezone = () => (state: RootState) => {
  return state.timezone;
};

export default timezoneReducer.reducer;
