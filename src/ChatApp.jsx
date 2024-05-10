import { Provider } from "react-redux";
import { ArticlePage } from "./article";
import { store } from "./store";

export const ChatApp = () => {
    return (
        <Provider store={store}>
            <ArticlePage />
        </Provider>
    );
};
