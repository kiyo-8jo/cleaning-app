import { RoomType } from "@/app/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// データ取得用関数
export const getRooms1f = createAsyncThunk(
  "rooms1f/fetchByIdStatus",
  async () => {
    const url = process.env.NEXT_PUBLIC_URL;
    const res = await fetch(`${url}/api/room/1f`, { cache: "no-store" });
    const data = await res.json();
    return data.rooms_1f;
  }
);

// データ変更用関数
export const editRoom1f = createAsyncThunk(
  "rooms1f/editRoom1f",
  async (payload: { newRoomDate: RoomType }) => {
    const { newRoomDate } = payload;
    const {
      cleaningType,
      stayCleaningType,
      isKeyBack,
      isCleaningComplete,
      isWaitingCheck,
      nowBeds,
      newBeds,
      adult,
      inf,
      kidInf,
      memo,
    } = newRoomDate;
    const url = process.env.NEXT_PUBLIC_URL;
    const res = await fetch(`${url}/api/room/1f/${newRoomDate.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cleaningType,
        stayCleaningType,
        isKeyBack,
        isCleaningComplete,
        isWaitingCheck,
        nowBeds,
        newBeds,
        adult,
        inf,
        kidInf,
        memo,
      }),
    });
    return await res.json();
  }
);

interface Rooms1fState {
  rooms1f: [] | RoomType[];
  getRooms1fStatus: "idle" | "pending" | "succeeded" | "failed";
  error: undefined | string;
}

const initialState = {
  rooms1f: [],
  getRooms1fStatus: "idle",
  error: undefined,
} satisfies Rooms1fState as Rooms1fState;

const rooms1fSlice = createSlice({
  name: "rooms1f",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRooms1f.pending, (state) => {
      state.getRooms1fStatus = "pending";
    });
    builder.addCase(getRooms1f.fulfilled, (state, action) => {
      state.rooms1f = action.payload;
      state.getRooms1fStatus = "succeeded";
    });
    builder.addCase(getRooms1f.rejected, (state, action) => {
      state.getRooms1fStatus = "failed";
      state.error = action.error.message;
    });
  },
});

export default rooms1fSlice.reducer;
