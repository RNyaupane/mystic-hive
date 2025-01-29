/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  items: [],
  isLoading: false,
  statusCode: 0,
  message: null,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // Add item to wishlist
    addItemToWishList: (state, action) => {
      const item = action.payload;
      const isInWishlist = state.items.some(
        (wishlistItem) => wishlistItem.id === item.id
      );

      if (!isInWishlist) {
        state.items.push(item);
        state.message = `Item '${item.name}' added to wishlist.`;
      } else {
        state.message = `Item '${item.name}' is already in the wishlist.`;
      }
    },

    // Remove item from wishlist
    removeItemToWishList: (state, action) => {
      const itemId = action.payload?.id;
      const itemIndex = state.items.findIndex(
        (wishlistItem) => wishlistItem.id === itemId
      );

      if (itemIndex !== -1) {
        const removedItem = state.items[itemIndex];
        state.items.splice(itemIndex, 1);
        state.message = `Item '${removedItem.name}' removed from wishlist.`;
      } else {
        state.message = `Item with ID '${itemId}' not found in the wishlist.`;
      }
    },

    // Clear all items from wishlist
    clearWishList: (state) => {
      if (state.items.length > 0) {
        state.items = [];
        state.message = "Wishlist cleared.";
      } else {
        state.message = "Wishlist is already empty.";
      }
    },
  },
});

const wishlistReducer = wishlistSlice.reducer;

// Export actions
export const { addItemToWishList, removeItemToWishList, clearWishList } =
  wishlistSlice.actions;

export default wishlistReducer;
