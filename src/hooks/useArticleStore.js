
import { useDispatch, useSelector } from "react-redux";
import { addAnswer, addQuestion, deleteArticle, setActiveArticle } from "../store";

export const useArticleStore = () => {

    const dispatch = useDispatch();
    const { activeArticle, articles, isWaitingAnswer } = useSelector((state) => state.article);

    /**
     * Function to set the selected article as active
     * @param {object} article - The article to set as active
     */
    const onSetActiveArticle = (article) => {
        dispatch(setActiveArticle(article));
    };

    const onDeleteArticle = (id) => {
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

    return {
        //properties
        activeArticle,
        articles,
        isWaitingAnswer,

        //methods
        onSetActiveArticle,
        onDeleteArticle,
        startAskingQuestion,

    };
};
