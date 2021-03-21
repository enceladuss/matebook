import React from "react";

import "./Dialogs.scss";

import userImg from "./../../img/user.jpg";
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import NewMessage from "./NewMessage";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((e, index) => <DialogItem key={index} dialogId={e.id}
                                                                            userAvatar={e.userAvatar}
                                                                            userName={e.userName}/>)

    let messagesElements = props.state.messages.map((e, index) => <MessageItem key={index} messageId={e.id}
                                                                               userAvatar={e.userAvatar}
                                                                               messageText={e.messageText}
                                                                               otherUser={e.otherUser}/>)

    return (
        <main className={`content dialogs-page`}>
            <div className="content-wrapp">

                <div className="dialogs filled-section">
                    <div className="section-head">
                        <h3 className="h3">Active dialogs</h3>
                    </div>

                    <div className="dialogs-list">

                        {dialogsElements}

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
                        {messagesElements}
                    </div>

                    <NewMessage/>

                </div>

            </div>
        </main>
    );
};

export default Dialogs;
