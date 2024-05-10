import { Header, Message, Prompter } from "..";
import { SummaryModal } from "../../article/components/SummaryModal";
import { useArticleStore } from "../../hooks";

export const ChatView = () => {
    const {activeArticle} = useArticleStore();
    return (
        <div className="d-flex flex-column text-grey bg-light" style={{height:"100vh"}}>
            <Header />
            <SummaryModal />
            <div className="overflow-auto text-center" style={{marginTop:"70px", marginBottom:"70px"}}>
                {activeArticle?.chat.map((msg, index) => (
                    <Message key={index} {...msg} />
                ))}
            </div>
            <div style={{ position: "fixed", bottom: 0 }} className="col-7 offset-1">
                <Prompter />
            </div>
        </div>
    );
};
