import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },
  
  reducers: {
    //uses immer BTS
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearItems: (state) => {
      state.items.length = 0;
      //return [items:[]];
      //both are same
    },
  },
});
export const { addItems, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
