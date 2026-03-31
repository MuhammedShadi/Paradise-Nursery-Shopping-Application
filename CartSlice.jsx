import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, name, price, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add item to cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // ✅ Remove item completely from cart
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(
        (item) => item.id !== id
      );
    },

    // ✅ Update item quantity
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(
        (i) => i.id === id
      );

      if (item) {
        item.quantity = quantity;

        // Optional: remove item if quantity becomes 0
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (i) => i.id !== id
          );
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
