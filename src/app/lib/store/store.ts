import { configureStore } from "@reduxjs/toolkit";
import is1fReducer from "../features/is1f/is1fSlice";
import rooms1fReducer from "../features/rooms1f/rooms1fSlice";
import rooms2fReducer from "../features/rooms2f/rooms2fSlice";
import targetRoomReducer from "../features/targetRoom/targetRoomSlice";
import isModalOpenReducer from "../features/modal/modalSlice";
import createRoomsReducer from "../features/createRooms/createRoomsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      is1f: is1fReducer,
      rooms1f: rooms1fReducer,
      rooms2f: rooms2fReducer,
      targetRoom: targetRoomReducer,
      isModalOpen: isModalOpenReducer,
      createRooms: createRoomsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = makeStore();
