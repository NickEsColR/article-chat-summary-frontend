export const Message = ({ role, content }) => {
    return (
        <div className="">
            {role === "user" ? (
                <>
                    <i class="fa-regular fa-user"></i>
                    <strong>you</strong>
                </>
            ) : (
                <>
                    <i class="fa-solid fa-robot"></i>
                    <strong>bot</strong>
                </>
            )}
            <br/>
            <span>{content}</span>

        </div>
    );
};
