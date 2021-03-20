import React from "react";

import "./ProfileLeftSidebar.scss";

import PersonalInfoItem from "../PersonalInfoItem";

const ProfileLeftSidebar = (props) => {

    const personalInfoElements = props.data.map( (e, index) => <PersonalInfoItem key={index} itemIcon={e.itemIcon} itemHead={e.itemHead} itemText={e.itemText} /> )

    return (
        <aside className="profile-content-sidebar profile-section filled-section">
            <div className="profile-content-sidebar-wrapp">
                <div className="section-head">
                    <h3 className="h3">Personal Info</h3>
                </div>

                {personalInfoElements}

            </div>
        </aside>
    );
};

export default ProfileLeftSidebar;
