import React from "react";

import "./ProfileRightSidebar.css";

const ProfileRightSidebar = () => {
  return (
      <aside className="profile-content-sidebar profile-content-right-sidebar profile-section">
        <div className="profile-content-sidebar-wrapp">
          <div className="profile-sub-section links-widget">
            <ul>
              <li>
                <a href="#" title="">
                  about
                </a>
              </li>
              <li>
                <a href="#" title="">
                  career
                </a>
              </li>
              <li>
                <a href="#" title="">
                  advertise
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Apps
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Help
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Gifts
                </a>
              </li>
              <li>
                <a href="#" title="">
                  content policy
                </a>
              </li>
              <li>
                <a href="#" title="">
                  User Policy
                </a>
              </li>
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
