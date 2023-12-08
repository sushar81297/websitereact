import { createSlice } from "@reduxjs/toolkit";
export const pageSlice = createSlice({
  name: "page",
  initialState: { page: 1, center: [96.1528718, 16.8023596], zoom: 12 },
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      state.page = state.page - 1;
      return state;
    },
    incrementByAmount: (state, action) => {
      state.page = state.page + action.payload;
      return state;
    },
    first: (state) => {
      state.page = 1;
      return state;
    },
    last: (state, action) => {
      state.page = action.payload;
      return state;
    },
    setCurrentCenter: (state, action) => {
      state.center = action.payload;
      return state;
    },
    setCurrentZoom: (state, action) => {
      state.zoom = action.payload;
      return state;
    },
  },
});

export const {
  increment,
  first,
  last,
  decrement,
  incrementByAmount,
  setCurrentCenter,
  setCurrentZoom,
} = pageSlice.actions;

export default pageSlice.reducer;
