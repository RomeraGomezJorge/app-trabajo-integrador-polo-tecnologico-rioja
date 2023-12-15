import { configureStore } from "@reduxjs/toolkit";
import locationSearchReducer from "./features/locations/locationSlice";

export const store = configureStore({
  reducer: {
    locationSearch: locationSearchReducer,
  },
});
