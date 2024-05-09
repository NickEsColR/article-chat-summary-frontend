export const Prompter = () => {
    return (
        <form className="input-group mb-3">
            <input type="text" className="form-control" placeholder="message" />
            <button className="btn btn-outline-secondary" type="button">
                <i className="fas fa-long-arrow-alt-up"></i>
            </button>
        </form>
    );
};
