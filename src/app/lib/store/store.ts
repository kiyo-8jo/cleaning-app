import { configureStore } from "@reduxjs/toolkit";
import is1fReducer from "../features/is1f/is1fSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      is1f: is1fReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = makeStore();
