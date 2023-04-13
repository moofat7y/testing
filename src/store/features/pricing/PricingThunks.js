import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/constants";

export const getAllPricingBouquets = createAsyncThunk(
  "pricing/getAllBouquet",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${API_URL}/Bouquet/GetAllBouquet`);
      console.log(response);
      return response.data.result;
    } catch (error) {
      console.log(error);
    }
  }
);
