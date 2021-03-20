import React from "react";

import {NavLink} from "react-router-dom";

import "./Navigation.scss";

const Navigation = (props) => {

    let NavigationElements = props.state.map((e, index) =>
        <NavLink key={index} to={e.navPath}>
            <div className="nav_links__icon">
                <img src={e.navImg} alt={e.navTitle} tilte={e.navTitle}/>
            </div>
        </NavLink>);

    return (
        <nav className="nav">
            <div className="nav_links">
                {NavigationElements}
            </div>
        </nav>
    );
};

export default Navigation;
