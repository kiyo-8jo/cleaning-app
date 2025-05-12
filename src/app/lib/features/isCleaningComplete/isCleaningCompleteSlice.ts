import { createSlice } from "@reduxjs/toolkit";

interface IsCleaningCompleteState {
  isCleaningComplete: boolean;
}

const initialState: IsCleaningCompleteState = {
  isCleaningComplete: false,
};

const isCleaningCompleteSlice = createSlice({
  name: "isCleaningComplete",
  initialState,
  reducers: {
    setIsCleaningComplete: (state, action) => {
      state.isCleaningComplete = action.payload;
    },
  },
});

export const { setIsCleaningComplete } = isCleaningCompleteSlice.actions;
export default isCleaningCompleteSlice.reducer;
