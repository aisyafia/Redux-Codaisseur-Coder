import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  details: null,
};

export const feedsSlice = createSlice({
  name: "feed",
  initialState: initialState,
  reducers: {
    allPostsFetched: (state, action) => {
      //   console.log(action, "this is action");
      state.posts = action.payload;
    },
    onePostFetched: (state, action) => {
      //   console.log("2nd action", action);
      state.details = action.payload;
    },
  },
});

export const { allPostsFetched, onePostFetched } = feedsSlice.actions;

export default feedsSlice.reducer;
