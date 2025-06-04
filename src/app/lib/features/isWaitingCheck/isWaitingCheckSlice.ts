import { createSlice } from "@reduxjs/toolkit";

interface IsWaitingCheckState {
  isWaitingCheck: boolean;
}

const initialState: IsWaitingCheckState = {
  isWaitingCheck: false,
};

const isWaitingCheckSlice = createSlice({
  name: "isWaitingCheck",
  initialState,
  reducers: {
    setIsWaitingCheck: (state, action) => {
      state.isWaitingCheck = action.payload;
    },
  },
});

export const { setIsWaitingCheck } = isWaitingCheckSlice.actions;
export default isWaitingCheckSlice.reducer;
