import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/constants";

export const getAvailableTimes = createAsyncThunk(
  "availableTimes/getAvailableTimes",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${API_URL}/User/GetAllTime`);
      console.log(response);
      return response.data.result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateAvailableTimes = createAsyncThunk(
  "availableTimes/updateAvailableTimes",
  async ({ timeId, status }, thunkAPI) => {
    try {
      const response = await axios.put(
        `${API_URL}/User/UpdateAvailableTimeStatus?status=${status}&TimeId=${timeId}`
      );
      // console.log(response);
      thunkAPI.dispatch(getAvailableTimes());
      return response.data.result;
    } catch (error) {
      console.log(error);
    }
  }
);
