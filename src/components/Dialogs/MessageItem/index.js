import React from "react";

import "./MessageItem.css";

const MessageItem = (props) => {
    return (
        <div className={`message-item interlocutor ${props.otherUser ? "you" : "me"}`}>
            <div className="user-img">
                <img src={props.userAvatar} alt=""/>
            </div>

            <div className="text-box">
                {props.messageText}
            </div>
        </div>
    )
}

export default MessageItem;
