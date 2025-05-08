import { configureStore } from "@reduxjs/toolkit";
import is1fReducer from "../features/is1f/is1fSlice";
import rooms1fReducer from "../features/rooms1f/rooms1fSlice";
import rooms2fReducer from "../features/rooms2f/rooms2fSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      is1f: is1fReducer,
      rooms1f: rooms1fReducer,
      rooms2f: rooms2fReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = makeStore();
