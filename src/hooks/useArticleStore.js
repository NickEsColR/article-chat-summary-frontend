import { useDispatch, useSelector } from "react-redux";
import {
    addAnswer,
    addNewArticle,
    addQuestion,
    deleteArticle,
    onLoadArticles,
    setActiveArticle,
    setChatMessages,
} from "../store";

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
    const onDeleteArticle = (id) => {
        //TODO; send request to the server to delete the article
        dispatch(deleteArticle(id));
    };

    /**
     * Function to start asking a question
     * @param {string} question - The question to ask
     */
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

    /**
     * Function to start creating an article
     * @param {string} title - The title of the article
     * @param {string} url - The url of the article
     */
    const startCreatingArticle = async (title, url) => {
        //TODO: send request to the server to create the article
        const newArticle = {
            id: articles.length + 1,
            title,
            summary:
                "Amet ad commodo ut sunt laborum irure proident sunt fugiat anim veniam nostrud. Eu quis deserunt sint ea et anim eu ex elit est minim minim minim. Reprehenderit incididunt consectetur aute aliquip do fugiat reprehenderit officia proident est sit. Ut quis amet est laboris excepteur enim dolor duis do nulla laboris ea et. Dolore eu esse anim laboris ad id. Sunt aliquip veniam ex do enim eu fugiat minim in.",
        };
        dispatch(addNewArticle(newArticle));
        dispatch(setActiveArticle(newArticle));
        dispatch(setChatMessages([]));
    };

    /**
     * Function to start loading the articles
     */
    const startLoadingArticles = async () => {
        //TODO: send request to the server to load the articles
        const articles = [
            {
                _id: "1",
                title: "Article 1",
                summary:
                    "Incididunt irure sit sint reprehenderit qui amet consequat. Amet cillum non reprehenderit ut anim nisi. Velit fugiat ad deserunt cupidatat do do aute. Tempor aute pariatur tempor minim excepteur nisi cupidatat ullamco consectetur commodo. Cillum nostrud eiusmod sunt laboris voluptate sint. Ea ad non qui et nulla dolore excepteur elit amet. Non aliqua mollit culpa ad incididunt est.",
            },
            {
                _id: "2",
                title: "Article 2",
                summary:
                    "Incididunt irure sit sint reprehenderit qui amet consequat. Amet cillum non reprehenderit ut anim nisi. Velit fugiat ad deserunt cupidatat do do aute. Tempor aute pariatur tempor minim excepteur nisi cupidatat ullamco consectetur commodo. Cillum nostrud eiusmod sunt laboris voluptate sint. Ea ad non qui et nulla dolore excepteur elit amet. Non aliqua mollit culpa ad incididunt est.",
            },
        ];

        setTimeout(() => {
            dispatch(onLoadArticles(articles));
        }, 3000);
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
