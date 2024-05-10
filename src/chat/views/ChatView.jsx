
import { useEffect, useRef } from "react";
import { Header, Message, Prompter } from "..";
import { SummaryModal } from "../../article/components/SummaryModal";
import { useArticleStore } from "../../hooks";

export const ChatView = () => {
    const { activeArticle } = useArticleStore();
    const scroll = useRef()

    useEffect(() => {
        scroll.current.scrollIntoView({ behavior: "smooth" });
    }, [activeArticle.chat]);

    return (
        <div
            className="d-flex flex-column text-grey bg-light"
            style={{ height: "100vh" }}
        >
            <Header />
            <SummaryModal />
            <div
                className="overflow-auto text-center chat-container"
                style={{
                    marginTop: "70px",
                    marginBottom: "90px",
                    marginRight: "10px",
                }}
            >
                {activeArticle?.chat?.map((msg, index) => (
                    <Message key={index} {...msg} />
                ))}
                <span ref={scroll}></span>
            </div>
            <div
                style={{ position: "fixed", bottom: 0 }}
                className="col-7 offset-1"
            >
                <Prompter scroll={scroll}/>
            </div>
        </div>
    );
};
