import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, articleSlice } from "./";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        article: articleSlice.reducer,
    },
});
