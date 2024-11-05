import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth"; // Ensure this path is correct

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
