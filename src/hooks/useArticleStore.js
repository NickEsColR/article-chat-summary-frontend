import { useDispatch, useSelector } from "react-redux";
import {
    addAnswer,
    addNewArticle,
    addQuestion,
    deleteArticle,
    onLoadArticles,
    setActiveArticle,
    setChatMessages,
    toggleLoadingArticles,
    toggleWaitingAnswer,
} from "../store";

import { articleApi } from "../api";
import Swal from "sweetalert2";

export const useArticleStore = () => {
    const dispatch = useDispatch();
    const { activeArticle, articles, isWaitingAnswer, isLoadingArticles } =
        useSelector((state) => state.article);

    /**
     * Function to set the selected article as active
     * @param {object} article - The article to set as active
     */
    const onSetActiveArticle = async (article) => {
        dispatch(setActiveArticle(article));
        //TODO: request messages to the server
        setTimeout(() => {
            dispatch(
                setChatMessages([
                    { role: "bot", content: "Hello" },
                    { role: "bot", content: "Hi! How can I help you today?" },
                ])
            );
        }, 3000);
    };

    /**
     * Function to delete an article
     * @param {string} id - The id of the article to delete
     */
    const onDeleteArticle = async (id) => {
        try {
            await articleApi.delete(`/article/${id}`);
            dispatch(deleteArticle(id));
        } catch (error) {
            Swal.fire(
                "Error al eliminar",
                error.response.data.message,
                "error"
            );
        }
    };

    /**
     * Function to start asking a question
     * @param {string} question - The question to ask
     */
    const startAskingQuestion = async (question) => {
        dispatch(addQuestion({ role: "user", content: question }));

        try {
            const { data } = await articleApi.post(
                `/article/chat/${activeArticle._id}`,
                { question }
            );
            const answer = data.answer;
            dispatch(addAnswer({ role: "assistant", content: answer }));
        } catch (error) {
            Swal.fire(
                "Error al enviar pregunta",
                error.response.data.message,
                "error"
            );
            dispatch(toggleWaitingAnswer());
        }
    };

    /**
     * Function to start creating an article and save it
     * @param {string} title - The title of the article
     * @param {string} url - The url of the article
     */
    const startCreatingArticle = async (name, url) => {
        dispatch(toggleLoadingArticles());
        try {
            const { data } = await articleApi.post("/article", { name, url });
            const newArticle = data.article;
            dispatch(addNewArticle(newArticle));
            dispatch(setActiveArticle(newArticle));
            dispatch(setChatMessages([]));
        } catch (error) {
            Swal.fire("Error al guardar", error.response.data.message, "error");
        }
        dispatch(toggleLoadingArticles());
    };

    /**
     * Function to start loading the articles
     */
    const startLoadingArticles = async () => {
        try {
            const { data } = await articleApi.get("/article");
            const articles = data.articles;
            dispatch(onLoadArticles(articles));
        } catch (error) {
            console.error(error);
        }
    };

    return {
        //properties
        activeArticle,
        articles,
        isWaitingAnswer,
        isLoadingArticles,

        //methods
        onSetActiveArticle,
        onDeleteArticle,
        startAskingQuestion,
        startCreatingArticle,
        startLoadingArticles,
    };
};
