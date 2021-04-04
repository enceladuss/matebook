import React from "react";

import "./Dialogs.scss";

import DialogSection from "./DialogsSection";
import MessagesSection from "./MessagesSection";

const Dialogs = (props) => {

    let state = props.store.getState();

    return (
        <main className={`content dialogs-page`}>
            <div className="content-wrapp">

                <DialogSection dialogs={state.dialogsPage.dialogs}/>

                <MessagesSection store={props.store} newMessageText={state.dialogsPage.newMessageText} messages={state.dialogsPage.messages}
                                 dispatch={state.dispatch}/>
            </div>
        </main>
    );
};

export default Dialogs;
