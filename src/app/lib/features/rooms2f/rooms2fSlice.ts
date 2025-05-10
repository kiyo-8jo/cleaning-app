import { RoomType } from "@/app/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// データ取得用関数
export const getRooms2f = createAsyncThunk(
  "rooms2f/fetchByIdStatus",
  async () => {
    const url = process.env.NEXT_PUBLIC_URL;
    const res = await fetch(`${url}/api/room/2f`, { cache: "no-store" });
    const data = await res.json();
    return data.rooms_2f;
  }
);

// データ変更用関数
export const editRoom2f = createAsyncThunk(
  "rooms2f/editRoom2f",
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
    const res = await fetch(`${url}/api/room/2f/${newRoomDate.id}`, {
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


interface Rooms2fState {
  rooms2f: [] | RoomType[];
  getRooms2fStatus: "idle" | "pending" | "succeeded" | "failed";
  error: undefined | string;
}

const initialState = {
  rooms2f: [],
  getRooms2fStatus: "idle",
  error: undefined,
} satisfies Rooms2fState as Rooms2fState;

const rooms2fSlice = createSlice({
  name: "rooms2f",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRooms2f.pending, (state) => {
      state.getRooms2fStatus = "pending";
    });
    builder.addCase(getRooms2f.fulfilled, (state, action) => {
      state.rooms2f = action.payload;
      state.getRooms2fStatus = "succeeded";
    });
    builder.addCase(getRooms2f.rejected, (state, action) => {
      state.getRooms2fStatus = "failed";
      state.error = action.error.message;
    });
  },
});

export default rooms2fSlice.reducer;
