import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSummaryModalOpen: false,
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
    },
});

export const { onOpenSummaryModal, onCloseSummaryModal } = uiSlice.actions;
