import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./thunks/authThunks";
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
  },
});

export const { reset, registerReset } = authSlice.actions;

export default authSlice.reducer;
