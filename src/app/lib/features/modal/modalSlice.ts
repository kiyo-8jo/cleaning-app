import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const isModalOpenSlice = createSlice({
  name: "isModalOpen",
  initialState,
  reducers: {
    setIsModalOpen: (state) => {
      state.isModalOpen = true;
    },
    setIsModalClose: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { setIsModalOpen, setIsModalClose } = isModalOpenSlice.actions;
export default isModalOpenSlice.reducer;
