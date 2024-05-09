export const NothingSelectedView = () => {
    return (
        <div
            className="bg-secondary d-flex justify-content-center align-items-center flex-column"
            style={{ height: "100vh" }}
        >
            <h3>Nothing selected</h3>
            <h5 className="text-light">Create or select an article</h5>
        </div>
    );
};
