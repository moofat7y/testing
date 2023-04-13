import { createSlice } from "@reduxjs/toolkit";
import { getAllPricingBouquets } from "./PricingThunks";

const initialState = {
  bouquets: [],
  isLoading: false,
};

const BouquetSlice = createSlice({
  name: "bouquets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPricingBouquets.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllPricingBouquets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bouquets = action.payload;
    });
    builder.addCase(getAllPricingBouquets.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {} = BouquetSlice.actions;

export default BouquetSlice.reducer;
