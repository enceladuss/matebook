import React from "react";

import NewMessage from "./index";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },

        updateMessageText: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

export default NewMessageContainer;
