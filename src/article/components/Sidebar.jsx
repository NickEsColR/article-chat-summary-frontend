import { useArticleStore } from "../../hooks";
import "../styles/sidebar.css";

export const Sidebar = () => {
    const { articles, onSetActiveArticle, onDeleteArticle } = useArticleStore();

    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
            style={{ height: "100vh" }}
        >
            <h3>Articles</h3>
            <hr />

            <div className="articles-container overflow-auto">
                <ul className="nav flex-column mb-auto nav-pills">
                    {articles.map((article) => {
                        return (
                            <li
                                key={article._id}
                                className="nav-link text-white article d-flex justify-content-between align-items-center"
                            >
                                {article.title}
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
            <button className="btn btn-dark d-flex justify-content-between align-items-center">
                <span>Add new article</span>
                <i className="fas fa-plus"></i>
            </button>
        </div>
    );
};
