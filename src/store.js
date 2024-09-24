import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./ui/Cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
