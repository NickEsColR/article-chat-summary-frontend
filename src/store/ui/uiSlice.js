import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSummaryModalOpen: false,
    isNewArticleOpen: false,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        onOpenSummaryModal: (state) => {
            state.isSummaryModalOpen = true;
        },
        onCloseSummaryModal: (state) => {
            state.isSummaryModalOpen = false;
        },
        onOpenNewArticle: (state) => {
            state.isNewArticleOpen = true;
        },
        onCloseNewArticle: (state) => {
            state.isNewArticleOpen = false;
        },
    },
});

export const {
    onOpenSummaryModal,
    onCloseSummaryModal,
    onOpenNewArticle,
    onCloseNewArticle,
} = uiSlice.actions;
