import type { RoomType } from "@/app/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CreateNewRoomsProps {
  newRooms1f: RoomType[] | null;
  newRooms2f: RoomType[] | null;
}

// データ更新用関数
export const createNewRooms = createAsyncThunk(
  "createRooms/setNewRooms",
  async ({ newRooms1f, newRooms2f }: CreateNewRoomsProps) => {
    const url = process.env.NEXT_PUBLIC_URL;

    await fetch(`${url}/api/room/createRooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newRooms1f, newRooms2f }),
    });
  },
);

interface CreateRoomsState {
  newRooms1f: RoomType[] | null;
  newRooms2f: RoomType[] | null;
  createRoomsStatus: "idle" | "pending" | "succeeded" | "failed";
  error: undefined | string;
}

const initialState: CreateRoomsState = {
  newRooms1f: [],
  newRooms2f: [],
  createRoomsStatus: "idle",
  error: undefined,
};

const createRoomsSlice = createSlice({
  name: "createRooms",
  initialState,
  reducers: {
    setNewRooms1f: (state, actions) => {
      state.newRooms1f = actions.payload;
    },
    setNewRooms2f: (state, actions) => {
      state.newRooms2f = actions.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(createNewRooms.pending, (state) => {
      state.createRoomsStatus = "pending";
    });
    builder.addCase(createNewRooms.fulfilled, (state) => {
      state.createRoomsStatus = "succeeded";
    });
    builder.addCase(createNewRooms.rejected, (state, action) => {
      state.createRoomsStatus = "failed";
      state.error = action.error.message;
    });
  },
});

export const { setNewRooms1f, setNewRooms2f } = createRoomsSlice.actions;
export default createRoomsSlice.reducer;
