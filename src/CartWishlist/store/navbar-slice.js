import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: { active: "menu" },
  reducers: {
    navbarItemClicked(state, action) {
      state.active = action.payload;
    },
  },
});

export const navbarActions = navbarSlice.actions;

export default navbarSlice;
