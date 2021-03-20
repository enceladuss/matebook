import React from "react";

import "./DialogItem.scss";

import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    return (
        <NavLink className="dialog-item" to={`/dialogs/${props.dialogId}`}>
            <div className="dialog-head">
                <div className="dialog-head-image">
                    <img src={props.userAvatar} alt=""/>
                </div>

                <div className="dialog-info">
                    <div className="user-name">{props.userName}</div>
                </div>
            </div>
        </NavLink>
    )
}

export default DialogItem;
