import { configureStore } from "@reduxjs/toolkit";
import { musicSlice } from "./reducers";
export const store = configureStore({
  reducer: {
    music: musicSlice.reducer,
  },
});
