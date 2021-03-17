import React from "react";

import "./Dialogs.css";

import userImg from "./../../img/user.jpg";

import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( e => <DialogItem dialogId={e.id} userAvatar={e.userAvatar} userName={e.userName}/> )

    let messagesElements = props.messages.map( e => <MessageItem messageId={e.id} userAvatar={e.userAvatar} messageText={e.messageText} otherUser={e.otherUser}/> )

    return (
        <main className={`content dialogs-page`}>
            <div className="content-wrapp">

                <div className="dialogs filled-section">
                    <div className="section-head">
                        <h3 className="h3">Active dialogs</h3>
                    </div>

                    <div className="dialogs-list">

                        { dialogsElements }

                    </div>
                </div>


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

                        { messagesElements }

                    </div>
                </div>

            </div>
        </main>
    );
};

export default Dialogs;
