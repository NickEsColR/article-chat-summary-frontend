import "../styles/sidebar.css";

const tempArticles = [
    { id: 1, title: "Article 1" },
    { id: 2, title: "Article 2" },
    { id: 3, title: "Article 3" },
];

export const Sidebar = () => {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
            style={{ height: "100vh" }}
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
            <div style={{ width: "100%" }}>
                <span className="article">
                    <i className="fas fa-plus"></i>
                    &nbsp; Add new article
                </span>
            </div>
        </div>
    );
};
