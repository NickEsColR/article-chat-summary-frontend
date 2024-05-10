export const Message = ({ role, content }) => {
    return (
        <div>
            {role === "user" ? (
                <>
                    <i className="fa-regular fa-user"></i>
                    <strong>you</strong>
                </>
            ) : (
                <>
                    <i className="fa-solid fa-robot"></i>
                    <strong>bot</strong>
                </>
            )}
            <br/>
            <span>{content}</span>

        </div>
    );
};
