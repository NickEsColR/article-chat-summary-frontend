import { useArticleStore, useUiStore } from "../../hooks";
import "../styles/sidebar.css";

export const Sidebar = () => {
    const { articles, onSetActiveArticle, onDeleteArticle } = useArticleStore();
    const { isNewArticleOpen, openNewArticle } = useUiStore();

    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark text-center"
            style={{ height: "100vh" }}
        >
            <h2 style={{ marginBottom: 0 }}>Articles</h2>
            <hr style={{ marginTop: 0 }} />

            <div className="articles-container overflow-auto">
                <ul className="nav flex-column mb-auto nav-pills">
                    {articles.map((article) => {
                        return (
                            <li
                                key={article._id}
                                className="nav-link text-white d-flex justify-content-between align-items-center"
                            >
                                <div
                                    className="article container-fluid text-start"
                                    onClick={() => {
                                        onSetActiveArticle(article);
                                    }}
                                >
                                    {article.title}
                                </div>
                                <button
                                    className="btn btn-dark"
                                    onClick={() => {
                                        onDeleteArticle(article._id);
                                    }}
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <hr />
            <button
                className="btn btn-dark d-flex justify-content-between align-items-center"
                onClick={openNewArticle}
                disabled={isNewArticleOpen}
            >
                <span>Add new article</span>
                <i className="fas fa-plus"></i>
            </button>
        </div>
    );
};
