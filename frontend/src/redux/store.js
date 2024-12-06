import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice.js";
import messageReducer from "../redux/MessageSlice.js";
import socketReducer from "../redux/socketSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    socket: socketReducer,
  },
});

export default store;
