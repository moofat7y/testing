import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import timesReducer from "./features/times/timesSlice";
import availableTimesReducer from "./features/AvilableTimes/AvailableTimesSlice.js";
import bouquetReducer from "./features/pricing/PricingSlice";
import addonsReducer from "./features/addons/AddonsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    times: timesReducer,
    availableTimes: availableTimesReducer,
    bouquet: bouquetReducer,
    addons: addonsReducer,
  },
});
