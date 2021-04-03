import React from "react";

import "./Dialogs.scss";

import DialogSection from "./DialogsSection";
import MessagesSection from "./MessagesSection";

const Dialogs = (props) => {
    return (
        <main className={`content dialogs-page`}>
            <div className="content-wrapp">

                <DialogSection dialogs={props.dialogsPage.dialogs}/>

                <MessagesSection newMessageText={props.dialogsPage.newMessageText} messages={props.dialogsPage.messages}
                                 dispatch={props.dispatch}/>
            </div>
        </main>
    );
};

export default Dialogs;
