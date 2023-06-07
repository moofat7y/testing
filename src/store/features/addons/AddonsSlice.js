import { createSlice } from "@reduxjs/toolkit";
import { getAllBouquetsAdons } from "./AddonsThunks";

const initialState = {
  addons: [],
  isLoading: false,
};

const AddonsSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBouquetsAdons.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBouquetsAdons.fulfilled, (state, action) => {
      state.isLoading = false;
      state.addons = action.payload;
    });
    builder.addCase(getAllBouquetsAdons.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {} = AddonsSlice.actions;

export default AddonsSlice.reducer;
