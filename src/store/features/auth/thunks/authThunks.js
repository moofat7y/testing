import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../../utils/constants";
import { notifyError, notifySucess } from "../../../../utils/helper";
import { reset } from "../authSlice";

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/PatientUser/PatientRegister`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      notifySucess(data.message);
      return data;
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const staffRegister = createAsyncThunk(
  "auth/staff-register",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/StaffUser/StaffRegister`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      notifySucess(data.message);
      return data;
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const { data } = await axios.post(
      `${API_URL}/PatientUser/PatientLogin`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (data) {
      localStorage.setItem("user", JSON.stringify(data.result));
    }
    notifySucess(data.message);
    return data;
  } catch (error) {
    console.log(error);
    notifyError(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const loginStaff = createAsyncThunk(
  "auth/loginStaff",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/StaffUser/StaffLogin`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data) {
        localStorage.setItem("user", JSON.stringify(data.result));
      }
      notifySucess(data.message);
      return data;
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  localStorage.removeItem("user");
  notifySucess("Logged out successfully");
  thunkAPI.dispatch(reset());
});

export const getUserReports = createAsyncThunk(
  "user/reports",
  async (patientId, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${API_URL}/Bouquet/GetPatientBouquet?patientId=${patientId}`
      );
      const oldUser = JSON.parse(window.localStorage.getItem("user"));
      const newUser = { ...oldUser, reports: data.result.reports };
      window.localStorage.setItem("user", JSON.stringify(newUser));
      return data.result.reports;
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
