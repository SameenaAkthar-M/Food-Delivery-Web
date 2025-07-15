import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      state[id] = state[id] ? state[id] + 1 : 1;
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
