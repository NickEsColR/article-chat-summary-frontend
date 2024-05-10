import { useArticleStore, useUiStore } from "../../hooks";

export const SummaryModal = () => {
    const { isSummaryModalOpen } = useUiStore();
    const {activeArticle} = useArticleStore(); 

    return (
        <div
            style={{
                display: `${isSummaryModalOpen ? "block" : "none"}`,
                margin: "70px 10px -70px 10px",
            }}
            
        >
            <h1>Summary</h1>
            <hr />
            <p>
                {activeArticle?.summary || "No summary available"}
            </p>
            <hr/>
        </div>
    );
};
