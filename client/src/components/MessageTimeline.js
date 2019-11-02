// Zeigt eine Liste aller Messages

import React from "react";
import MessageList from "../containers/MessageList";

const MessageTimeline = props => {
    return (
        <div className="row">
            <MessageList />
        </div>
    )
}