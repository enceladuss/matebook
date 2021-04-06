import React from "react";

import "./Dialogs.scss";

import DialogSection from "./DialogsSection";
import MessagesSection from "./MessagesSection";

const Dialogs = (props) => {

    return (
        <main className={`content dialogs-page`}>
            <div className="content-wrapp">

                <DialogSection dialogs={props.state.dialogsPage.dialogs}/>

                <MessagesSection store={props.store} newMessageText={props.state.dialogsPage.newMessageText} messages={props.state.dialogsPage.messages}
                                 dispatch={props.state.dispatch}/>
            </div>
        </main>
    );
};

export default Dialogs;
