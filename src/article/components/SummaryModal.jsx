import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export const SummaryModal = () => {
    return (
        <Modal
            isOpen={false}
            style={customStyles}
            className={"modal"}
            overlayClassName={"bg-modal"}
            closeTimeoutMS={200}
        >
            <h1>Summary</h1>
            <hr />
            <p>
                Nisi nulla nostrud duis exercitation qui enim cillum enim
                exercitation amet. Culpa minim Lorem nisi esse. Velit sit ut
                amet id adipisicing duis aute mollit laboris. Enim laboris
                incididunt id nulla ipsum minim aliqua elit sunt.
            </p>
        </Modal>
    );
};
