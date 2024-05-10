import { useDispatch, useSelector } from "react-redux";
import { onCloseSummaryModal, onOpenSummaryModal } from "../store/ui/uiSlice";

export const useUiStore = () => {
    const dispatch = useDispatch();
    const { isSummaryModalOpen } = useSelector((state) => state.ui);

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
    }

    return {
        isSummaryModalOpen,
        openSummaryModal,
        closeSummaryModal,
    };
};
