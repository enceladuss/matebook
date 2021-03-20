import React from "react";

import {NavLink} from "react-router-dom";

import "./NavigationFriends.scss";

const NavigationFriends = (props) => {

    let NavigationFriendsElements = props.state.map((e, index) =>
        <NavLink key={index} to={e.navPath}>
            <div className="nav_links__icon">
                <img src={e.navImg} tilte={e.navTitle}/>
            </div>
        </NavLink>);

    return (
        <nav className="nav-friends">
            <div className="nav_links">
                { NavigationFriendsElements }
            </div>
        </nav>
    );
};

export default NavigationFriends;
