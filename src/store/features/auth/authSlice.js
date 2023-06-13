import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  register,
  staffRegister,
  getUserReports,
  loginStaff,
} from "./thunks/authThunks";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  isSuccess: false,
  isLoading: false,
  isRegistered: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.isRegistered = false;
      state.user = null;
    },
    onSessionCreate: (state) => {
      const updatedUser = { ...user, reports: state.user.reports - 1 };
      window.localStorage.setItem("user", JSON.stringify(updatedUser));
      state.user = updatedUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isRegistered = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(staffRegister.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(staffRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isRegistered = true;
    });
    builder.addCase(staffRegister.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload.result;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
    });
    builder.addCase(loginStaff.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginStaff.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload.result;
    });
    builder.addCase(loginStaff.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
    });
    builder.addCase(getUserReports.fulfilled, (state, action) => {
      state.user = { ...user, reports: action.payload };
    });
  },
});

export const { reset, registerReset, onSessionCreate } = authSlice.actions;

export default authSlice.reducer;
