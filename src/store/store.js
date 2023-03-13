import { configureStore } from "@reduxjs/toolkit";

import authorReducer from "../store/Author/reducer";
import comicsReducer from "../store/Mangas/reducer";

export const store = configureStore({
  reducer: {
    author: authorReducer,
    comics: comicsReducer,
  },
});
