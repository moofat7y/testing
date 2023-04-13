import { createSlice } from "@reduxjs/toolkit";
import { getAllTimes } from "./timesThunks";

const initialState = {
  times: [],
  isLoading: false,
};

const timesSlice = createSlice({
  name: "times",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTimes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTimes.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getAllTimes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.times = action.payload;
    });
  },
});

export const {} = timesSlice.actions;

export default timesSlice.reducer;
