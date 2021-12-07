import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./items/items-slice";
import navbarSlice from "./navbar-slice";

const store = configureStore({
  reducer: {
    navbar: navbarSlice.reducer,
    items: itemsSlice.reducer,
  },
});

export default store;
