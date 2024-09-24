import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartState: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        state.cart = state.cart.filter(
          (item) => item.name !== action.payload.name
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removeCartItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.name !== (action.payload.cartName || action.payload.name)
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.name === (action.payload.cartName || action.payload.name)
      );

      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.name === (action.payload.cartName || action.payload.name)
      );
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  toggleCartState,
  removeCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
