import { Sidebar } from "../";
import { ChatView, NothingSelectedView } from "../../chat";

export const ArticlePage = () => {
    return (
        <div className="row p-0">
            <div className="col-3 p-0">
                <Sidebar />
            </div>
            <div className="col-9 p-0">
                {/* <NothingSelectedView /> */}
                <ChatView />
            </div>
        </div>
    );
};
