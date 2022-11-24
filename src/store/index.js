import { configureStore } from "@reduxjs/toolkit";
import feedsSlice from "./feed/slice";

const store = configureStore({
  reducer: {
    feed: feedsSlice,
  },
});

export default store;
