import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice.js";
import messageReducer from "../redux/MessageSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});

export default store;
