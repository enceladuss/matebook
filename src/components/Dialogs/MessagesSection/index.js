import React from "react";

import "./MessagesSection.scss";
import userImg from "../../../img/user.jpg";
import MessageItem from "../MessageItem";
import NewMessageContainer from "../NewMessage/NewMessageContainer";

const MessagesSection = (props) => {

    let messagesElements = props.messages.map((e, index) => <MessageItem key={index} messageId={e.id}
                                                                                     userAvatar={e.userAvatar}
                                                                                     messageText={e.messageText}
                                                                                     otherUser={e.otherUser}/>)

    return (
        <div className="messages filled-section">
            <div className="message-head">
                <div className="dialog-head">
                    <div className="dialog-head-image">
                        <img src={userImg} alt=""/>
                    </div>

                    <div className="dialog-info">
                        <div className="user-name">Andrew</div>
                    </div>
                </div>
            </div>

            <div className="message-area">
                {messagesElements}
            </div>

            <NewMessageContainer />

        </div>
    )
}

export default MessagesSection;
