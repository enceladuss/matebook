import React from "react";

import "./DialogSection.scss";
import DialogItem from "../DialogItem";

const DialogSection = (props) => {

    let dialogsElements = props.dialogs.map((e, index) => <DialogItem key={index} dialogId={e.id}
                                                                                  userAvatar={e.userAvatar}
                                                                                  userName={e.userName}/>)

    return (
        <div className="dialogs-section filled-section">
            <div className="section-head">
                <h3 className="h3">Active dialogs</h3>
            </div>

            <div className="dialogs-list">

                {dialogsElements}

            </div>
        </div>
    )
}

export default DialogSection;
