import React from "react";

import NewMessage from "./index";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../../Redux/dialogs-reducer";
import StoreContext from "../../../StoreContext";

const NewMessageContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { store => {

                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }

                let onMessageChange = (text) => {
                    store.dispatch(onMessageChangeActionCreator(text))
                }

                return (
                    <NewMessage updateMessageText={onMessageChange} sendMessage={sendMessage} newMessageText={state.dialogsPage.newMessageText} />
                )
            }
            }
        </StoreContext.Consumer>
    );

};

export default NewMessageContainer;
