import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoadingArticles: false,
    articles: [
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
    ],
    activeArticle: {
        _id: "1",
        title: "Article 1",
        summary:
            "Incididunt irure sit sint reprehenderit qui amet consequat. Amet cillum non reprehenderit ut anim nisi. Velit fugiat ad deserunt cupidatat do do aute. Tempor aute pariatur tempor minim excepteur nisi cupidatat ullamco consectetur commodo. Cillum nostrud eiusmod sunt laboris voluptate sint. Ea ad non qui et nulla dolore excepteur elit amet. Non aliqua mollit culpa ad incididunt est.",
        chat: [
            {
                role: "user",
                content: "Hello",
            },
            {
                role: "bot",
                content: "Hi! How can I help you today?",
            },
        ],
    },
};

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setActiveArticle: (state, {payload}) => {
            state.activeArticle = payload;
        },
        addNewArticle: (state, {payload}) => {
            state.articles.push(payload);
            state.activeArticle = payload;
        },
        addChatMessage: (state, {payload}) => {
            state.activeArticle.chat.push(payload);
        },
        setChatMessages: (state, {payload}) => {
            state.activeArticle.chat = payload;
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
    },
});

export const {
    setActiveArticle,
    addNewArticle,
    addChatMessage,
    setChatMessages,
    deleteArticle,
    onLoadArticles,
} = articleSlice.actions;
