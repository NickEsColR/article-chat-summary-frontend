import React from "react";
import { useArticleStore, useUiStore } from "../../hooks";

export const NewArticle = () => {
    const {closeNewArticle} = useUiStore();
    const {startCreatingArticle} = useArticleStore();
    const onSubmit = (e) => {
        e.preventDefault();
        const { target } = e;
        startCreatingArticle(target.title.value, target.url.value);
        closeNewArticle();
    };

    const onCancel = () => {
        console.log("New article canceled");
        closeNewArticle();
    };
    return (
        <div
            className="p-3 bg-light container-fluid"
            style={{ height: "100%" }}
        >
            <h1>NEW ARTICLE</h1>
            <hr />
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="url" className="form-label">
                        URL
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="url"
                        required
                    />
                </div>
                <div className="d-flex justify-content-evenly">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};
