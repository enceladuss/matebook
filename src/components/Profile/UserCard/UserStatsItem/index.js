import React from "react";

import "./UserStatsItem.css";

const UserStatsItem = (props) => {
    return (
        <div className="user_stats__item">
            <h3 className="h3">{props.statsHead}</h3>
            <span>{props.statsValue}</span>
        </div>
    )
}

export default UserStatsItem;
