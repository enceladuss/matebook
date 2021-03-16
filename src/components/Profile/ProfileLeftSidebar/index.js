import React from "react";

import "./ProfileLeftSidebar.css";

import userImg from "./../../../img/icons/user.svg";
import birthdayCakeImg from "../../../img/icons/birthday-cake.svg";
import globeImg from "../../../img/icons/globe.svg";
import briefCaseImg from "../../../img/icons/briefcase.svg";
import envelopeImg from "../../../img/icons/envelope.svg";
import handShakeImg from "../../../img/icons/handshake.svg";

import PersonalInfoItem from "../PersonalInfoItem";

const ProfileLeftSidebar = () => {

    const personalInfoData = [
        {id: 1,itemIcon: userImg,itemHead: 'About Me:', itemText: 'Hi, I’m John Carter, I’m 36 and I work as a Digital Designer for the “dewwater” Agency in Ontario, Canada.' },
        {id: 2,itemIcon: birthdayCakeImg,itemHead: 'Birthday:', itemText: 'December 17, 1985' },
        {id: 3,itemIcon: globeImg,itemHead: 'Country:', itemText: 'San Francisco, California, USA' },
        {id: 4,itemIcon: briefCaseImg,itemHead: 'Occupation:', itemText: 'UI/UX Designer' },
        {id: 5,itemIcon: envelopeImg,itemHead: 'Email & Website:', itemText: 'jackc85@gmail.com' },
        {id: 6,itemIcon: handShakeImg,itemHead: 'Joined:', itemText: 'December 20, 2021' },
    ]

    const personalInfoElements = personalInfoData.map( (e) => <PersonalInfoItem itemIcon={e.itemIcon} itemHead={e.itemHead} itemText={e.itemText} /> )

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
