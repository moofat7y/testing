import { createSlice } from "@reduxjs/toolkit";
import { getAvailableTimes } from "./AvailableTimesThunks";

const initialState = {
  availableTimes: [],
  isLoading: false,
};

const AvailableTimesSlice = createSlice({
  name: "availableTimes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAvailableTimes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAvailableTimes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.availableTimes = action.payload;
    });
    builder.addCase(getAvailableTimes.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {} = AvailableTimesSlice.actions;

export default AvailableTimesSlice.reducer;
