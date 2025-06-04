import type { RoomType } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface EmptyObjectType {
  [key: string]: never;
}

interface PayloadType {
  room: RoomType | EmptyObjectType;
  is1f: boolean;
  rooms1f: RoomType[];
  rooms2f: RoomType[];
}

const initialState = {
  targetRoom: {} as RoomType | EmptyObjectType,
};

const targetRoomSlice = createSlice({
  name: "targetRoom",
  initialState,
  reducers: {
    setTargetRoom: (state, actions) => {
      const { room, is1f, rooms1f, rooms2f }: PayloadType = actions.payload;
      const floorRooms: RoomType[] = is1f ? rooms1f : rooms2f;
      const createTargetRoom = () => {
        const _targetRoom = floorRooms?.find((_room) => _room.id === room.id);
        if (_targetRoom === undefined) return {};
        return _targetRoom;
      };
      state.targetRoom = createTargetRoom();
    },
  },
});

export const { setTargetRoom } = targetRoomSlice.actions;
export default targetRoomSlice.reducer;
