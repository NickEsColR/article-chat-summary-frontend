import "../styles/sidebar.css";

const tempArticles = [
    { id: 1, title: "Article 1" },
    { id: 2, title: "Article 2" },
    { id: 3, title: "Article 3" },
    { id: 4, title: "Article 4" },
    { id: 5, title: "Article 5" },
    { id: 6, title: "Article 6" },
    { id: 7, title: "Article 7" },
    { id: 8, title: "Article 8" },
    { id: 9, title: "Article 9" },
    { id: 10, title: "Article 10" },
    { id: 1, title: "Article 1" },
    { id: 2, title: "Article 2" },
    { id: 3, title: "Article 3" },
    { id: 4, title: "Article 4" },
    { id: 5, title: "Article 5" },
    { id: 6, title: "Article 6" },
    { id: 7, title: "Article 7" },
    { id: 8, title: "Article 8" },
    { id: 9, title: "Article 9" },
    { id: 10, title: "Article 10" },
];

export const Sidebar = () => {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
            style={{ width: "280px", height: "100%" }}
        >
            <h3>Articles</h3>
            <hr />

            <div className="articles-container overflow-auto">
                <ul className="nav flex-column mb-auto nav-pills">
                    {tempArticles.map((article) => {
                        return (
                            <li
                                key={article.id}
                                className="nav-link text-white article"
                            >
                                {article.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <hr />
            <span className="article">
                <i className="fas fa-plus"></i>
                &nbsp; Add new article
            </span>
        </div>
    );
};
