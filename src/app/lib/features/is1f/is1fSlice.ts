import { createSlice } from "@reduxjs/toolkit";

const initialState = { is1f: true };

const is1fSlice = createSlice({
  name: "is1f",
  initialState,
  reducers: {
    setIs1fTrue: (state) => {
      state.is1f = true;
    },
    setIs1fFalse: (state) => {
      state.is1f = false;
    },
  },
});

export const { setIs1fTrue, setIs1fFalse } = is1fSlice.actions;
export default is1fSlice.reducer;
