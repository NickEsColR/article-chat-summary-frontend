import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoadingArticles: true,
    isWaitingAnswer:false,
    articles: [],
    activeArticle: null
};

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setActiveArticle: (state, {payload}) => {
            state.activeArticle = payload;
            state.isWaitingAnswer = true;
        },
        addNewArticle: (state, {payload}) => {
            state.articles.push(payload);
            state.activeArticle = payload;
        },
        addQuestion: (state, {payload}) => {
            state.activeArticle.chat.push(payload);
            state.isWaitingAnswer = true;
        },
        addAnswer: (state, {payload}) => {
            state.activeArticle.chat.push(payload);
            state.isWaitingAnswer = false;
        },
        setChatMessages: (state, {payload}) => {
            state.activeArticle.chat = payload;
            state.isWaitingAnswer = false;
        },
        deleteArticle: (state, {payload}) => {
            state.articles = state.articles.filter(
                (article) => article._id !== payload
            );
            state.activeArticle = (state.activeArticle?._id === payload ? null : state.activeArticle)
        },
        onLoadArticles: (state, {payload = []}) => {
            state.isLoadingArticles = false;
            payload.forEach((article) => {
                const exists = state.articles.some(
                    (a) => a._id === article._id
                )
                if (!exists) {
                    state.articles.push(article);
                }
            });
        },
        toggleLoadingArticles: (state) => {
            state.isLoadingArticles = !state.isLoadingArticles;
        },
        toggleWaitingAnswer: (state) => {
            state.isWaitingAnswer = !state.isWaitingAnswer;
        }
    },
});

export const {
    setActiveArticle,
    addNewArticle,
    addQuestion,
    addAnswer,
    setChatMessages,
    deleteArticle,
    onLoadArticles,
    toggleLoadingArticles,
    toggleWaitingAnswer
} = articleSlice.actions;
