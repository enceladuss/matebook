import React from "react";

import "./UserCard.css";

import profileImg from '../../../img/profile-image.jpg';
import userImg from "../../../img/user.jpg";

import UserStatsItem from "./UserStatsItem";

const UserCard = (props) => {

    const UserStatsElements = props.data.map(e => <UserStatsItem statsHead={e.statsHead} statsValue={e.statsValue} /> )

    return (
        <div className="user_card">
            <div className="user_card__bg">
                <img src={profileImg} alt=""/>
            </div>
            <div className="user_card__info">
                <div className="profile_author">
                    <div className="profile_author__thumb">
                        <img src={userImg} alt=""/>
                    </div>
                    <div className="profile_author__info">
                        <h4 className="h4">Jack Carter</h4>
                        <span className="profile_author__country">Ontario, CA</span>
                    </div>
                </div>

                <div className="user_stats">
                    {UserStatsElements}
                </div>

            </div>
        </div>
    );
};

export default UserCard;
