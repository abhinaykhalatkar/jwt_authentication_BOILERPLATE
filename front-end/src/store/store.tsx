import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./slices/userInfoSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
