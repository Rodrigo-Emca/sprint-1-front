import { createSlice } from "@reduxjs/toolkit";

// Reducer para los datos del autor
const authorSlice = createSlice({
  name: "author",
  initialState: null,
  reducers: {
    setAuthor: (state, action) => {
      return action.payload;
    },
    clearAuthor: () => null,
  },
});

export const { setAuthor, clearAuthor } = authorSlice.actions;
export default authorSlice.reducer;

// Reducer para los comics
const comicsSlice = createSlice({
  name: "comics",
  initialState: { order: "asc", active: true },
  reducers: {
    toggleOrder: (state) => {
      return { ...state, order: state.order === "asc" ? "desc" : "asc" };
    },
    toggleActive: (state) => {
      return { ...state, active: !state.active };
    },
  },
});

export const { toggleOrder, toggleActive } = comicsSlice.actions;

