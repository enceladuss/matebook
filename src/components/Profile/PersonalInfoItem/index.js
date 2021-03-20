import React from "react";

import "./PersonalInfoItem.scss";

const PersonalInfoItem = (props) => {
    return (
        <div className="personal-info-item">
            <div className="personal-info-item-head">
                <img src={props.itemIcon} alt="user"/>
                {props.itemHead}
            </div>

            <div className="personal-info-item-text">
                <p>
                    {props.itemText}
                </p>
            </div>
        </div>
    )
}

export default PersonalInfoItem;