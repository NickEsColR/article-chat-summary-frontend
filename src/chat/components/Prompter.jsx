import { useArticleStore } from "../../hooks";

export const Prompter = () => {
    const { startAskingQuestion, isWaitingAnswer } = useArticleStore();
    

    const onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.target[0].value.trim().length <= 0) {
            event.target[0].value = "";
            return;
        }
        startAskingQuestion(event.target[0].value);
        event.target[0].value = "";
    };
    return (
        <>
            {isWaitingAnswer && (
                <>
                    <div className="spinner-border" role="status"></div>
                    <span className="p-3">&nbsp; Waiting for answer...</span>
                </>
            )}
            <form className="input-group mb-3" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="message"
                    disabled={isWaitingAnswer}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    disabled={isWaitingAnswer}
                >
                    <i className="fas fa-long-arrow-alt-up"></i>
                </button>
            </form>
        </>
    );
};
