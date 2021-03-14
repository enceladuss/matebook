import React from "react";

import "./ProfileRightSidebar.css";

const ProfileRightSidebar = () => {

  const links = [
      {id: 1, link:'#', linkText: 'about'},
      {id: 2, link:'#', linkText: 'career'},
      {id: 3, link:'#', linkText: 'advertise'},
      {id: 4, link:'#', linkText: 'Apps'},
      {id: 5, link:'#', linkText: 'Blog'},
      {id: 6, link:'#', linkText: 'Help'},
      {id: 7, link:'#', linkText: 'Gifts'},
      {id: 8, link:'#', linkText: 'content policy'},
      {id: 9, link:'#', linkText: 'User Policy'},
  ]

  const linksElements = links.map( e  => <li><a href={e.link}>{e.linkText}</a></li>)

  return (
      <aside className="profile-content-sidebar profile-content-right-sidebar profile-section">
        <div className="profile-content-sidebar-wrapp">
          <div className="profile-sub-section links-widget">
            <ul>
              {linksElements}
            </ul>
            <p>
              © MateBook 2021. <br /> All Rights Reserved.
            </p>
          </div>
        </div>
      </aside>
  );
};

export default ProfileRightSidebar;
