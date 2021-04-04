import React from "react";

import NewMessage from "./index";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../../Redux/dialogs-reducer";

const NewMessageContainer = (props) => {

    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text))
    }

    return (
        <NewMessage updateMessageText={onMessageChange} sendMessage={sendMessage} newMessageText={state.dialogsPage.newMessageText} />
    )
};

export default NewMessageContainer;
