import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from './Manga/reducers'

export const store = configureStore({
    reducer: {
        manga: mangaReducer
    }
})