import React from "react";

import "./ProfileRightSidebar.scss";

const ProfileRightSidebar = (props) => {

  const linksElements = props.data.map( (e, index)  => <li key={index}><a href={e.link}>{e.linkText}</a></li>)

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
