import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/constants";
import { notifyError, notifySucess } from "../../../utils/helper";

export const getAllTimes = createAsyncThunk(
  "times/getAllTimes",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/Staff/GetAllTimes?id=${id}`);
      return response.data.result;
    } catch (error) {
      console.log(error);
      notifyError("Error while fetching times");
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addTimeThunk = createAsyncThunk(
  "times/addTime",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/Staff/AddTime`, data);

      notifySucess(response.data.message);
      thunkAPI.dispatch(getAllTimes(data.staffId));
      return response.data.result;
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message);
      // return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteTimeThunk = createAsyncThunk(
  "times/deleteTime",
  async (timeId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${API_URL}/Staff/DeleteTime?timeid=${timeId}`
      );

      notifySucess(response.data.message);
      return response.data.result;
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message);
      // return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateTimeThunk = createAsyncThunk(
  "times/updateTime",
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(`${API_URL}/Staff/UpdateTime`, data);

      notifySucess(response.data.message);
      return response.data.result;
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message);
      // return thunkAPI.rejectWithValue(error);
    }
  }
);
