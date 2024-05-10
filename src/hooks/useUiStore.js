import { useDispatch, useSelector } from "react-redux";
import {
    onCloseNewArticle,
    onCloseSummaryModal,
    onOpenNewArticle,
    onOpenSummaryModal,
} from "../store/ui/uiSlice";

export const useUiStore = () => {
    const dispatch = useDispatch();
    const { isSummaryModalOpen, isNewArticleOpen } = useSelector(
        (state) => state.ui
    );

    /**
     * Function that dispatch the action to open the summary modal
     */
    const openSummaryModal = () => {
        dispatch(onOpenSummaryModal());
    };

    /**
     * Function that dispatch the action to close the summary modal
     */
    const closeSummaryModal = () => {
        dispatch(onCloseSummaryModal());
    };

    /**
     * Function that dispatch the action to open the new article modal
     */
    const openNewArticle = () => {
        dispatch(onOpenNewArticle());
    };

    /**
     * Function that dispatch the action to close the new article modal
     */
    const closeNewArticle = () => {
        dispatch(onCloseNewArticle());
    };

    return {
        isSummaryModalOpen,
        isNewArticleOpen,
        openSummaryModal,
        closeSummaryModal,
        openNewArticle,
        closeNewArticle,
    };
};
