
import { useDispatch, useSelector } from "react-redux";
import { addAnswer, addNewArticle, addQuestion, deleteArticle, setActiveArticle, setChatMessages } from "../store";

export const useArticleStore = () => {

    const dispatch = useDispatch();
    const { activeArticle, articles, isWaitingAnswer } = useSelector((state) => state.article);

    /**
     * Function to set the selected article as active
     * @param {object} article - The article to set as active
     */
    const onSetActiveArticle = async(article) => {
        dispatch(setActiveArticle(article));
        //TODO: request messages to the server
        setTimeout(() => {
            dispatch(setChatMessages([
                { role: "bot", content: "Hello" },
                { role: "bot", content: "Hi! How can I help you today?" }
            ]))
        }, 3000)
    };

    const onDeleteArticle = (id) => {
        //TODO; send request to the server to delete the article
        dispatch(deleteArticle(id));
    };

    const startAskingQuestion = async (question) => {
        dispatch(addQuestion({ role: "user", content: question }));
        
        //TODO: send question to the server and load the answer
        setTimeout(() => {
            dispatch(
                addAnswer({
                    role: "bot",
                    content: "I'm sorry, I don't have an answer for that.",
                })
            );
        }, 3000);
    };

    const startCreatingArticle = async (title, url) => {
        //TODO: send request to the server to create the article
        const newArticle = {
            id: articles.length + 1,
            title,
            summary:"Amet ad commodo ut sunt laborum irure proident sunt fugiat anim veniam nostrud. Eu quis deserunt sint ea et anim eu ex elit est minim minim minim. Reprehenderit incididunt consectetur aute aliquip do fugiat reprehenderit officia proident est sit. Ut quis amet est laboris excepteur enim dolor duis do nulla laboris ea et. Dolore eu esse anim laboris ad id. Sunt aliquip veniam ex do enim eu fugiat minim in.",
        };
        dispatch(addNewArticle(newArticle))
        dispatch(setActiveArticle(newArticle));
        dispatch(setChatMessages([]))
    }

    return {
        //properties
        activeArticle,
        articles,
        isWaitingAnswer,

        //methods
        onSetActiveArticle,
        onDeleteArticle,
        startAskingQuestion,
        startCreatingArticle
    };
};
