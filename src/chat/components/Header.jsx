import React from "react";
import { useArticleStore, useUiStore } from "../../hooks";

export const Header = () => {
    const { openSummaryModal, isSummaryModalOpen, closeSummaryModal } =
        useUiStore();

    const {activeArticle} = useArticleStore()

    const onClick = () => {
        isSummaryModalOpen ? closeSummaryModal() : openSummaryModal();
    };
    return (
        <nav
            className="navbar border-bottom col-9"
            style={{ position: "fixed", top: 0, zIndex: 1000 }}
        >
            <h1 className="navbar-brand">&nbsp;&nbsp;&nbsp;{activeArticle.name}</h1>
            <button className="navbar-text btn" onClick={onClick}>
                <i
                    className={`${
                        isSummaryModalOpen
                            ? "fa-regular fa-eye-slash"
                            : "fa-regular fa-eye"
                    }`}
                ></i>
                &nbsp; Summary
            </button>
        </nav>
    );
};
