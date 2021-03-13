import React from "react";

import profileImg from "../../img/icons/profile.png";
import newsImg from "../../img/icons/news.png";
import messageImg from "../../img/icons/message.png";
import settingsImg from "../../img/icons/settings.png";
import {NavLink} from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav_links">
                <NavLink to="/profile" activeClassName={`active`}>
                    <div className="nav_links__icon">
                        <img src={profileImg} alt="Profile" tilte="Profile"/>
                    </div>
                </NavLink>
                <NavLink to="/news">
                    <div className="nav_links__icon">
                        <img src={newsImg} alt="News" tilte="News"/>
                    </div>
                </NavLink>
                <NavLink to="/dialogs">
                    <div className="nav_links__icon">
                        <img src={messageImg} alt="Dialogs" tilte="Dialogs"/>
                    </div>
                </NavLink>
                <NavLink to="/settings">
                    <div className="nav_links__icon">
                        <img src={settingsImg} alt="Settings" tilte="Settings"/>
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navigation;
