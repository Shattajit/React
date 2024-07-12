import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // this is actually counterSlice but I renamed it here as counterReducer
    posts: postsReducer,
  },
});

export default store;
