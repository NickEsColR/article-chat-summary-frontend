import { Sidebar,NewArticle } from "../";
import { ChatView, NothingSelectedView } from "../../chat"
import { useArticleStore, useUiStore } from "../../hooks";

export const ArticlePage = () => {
    const {isNewArticleOpen} = useUiStore();
    const {activeArticle} = useArticleStore();

    const chat = (activeArticle !== null) ? <ChatView /> : <NothingSelectedView />;
    return (
        <>
            <div className="row p-0">
                <div className="col-3 p-0">
                    <Sidebar />
                </div>
                <div className="col-9 p-0">
                    {isNewArticleOpen ? <NewArticle /> : chat}
                    
                </div>
            </div>
        </>
    );
};
