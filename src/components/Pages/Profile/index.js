import React from "react";

import "./Profile.css";

import userImg from "../../../img/icons/user.svg";
import birthdayCakeImg from "../../../img/icons/birthday-cake.svg";

import UserCard from "../../UserCard";
import UserNewPost from "../../UserNewPost";
import UserPosts from "../../UserPosts";

const Profile = () => {
  return (
    <main className={`content profile_page`}>
      <div className="content-wrapp">
        <UserCard />

        <div className="profile-content-wrapper">
          <aside className="profile-content-sidebar profile-section">
            <div className="profile-content-sidebar-wrapp">
              <div className="profile-section-head">
                <h3 className="h3">Personal Info</h3>
              </div>

              <div className="personal-info-item">
                <div className="personal-info-item-head">
                  <img src={userImg} alt="user" />
                  About Me:
                </div>

                <div className="personal-info-item-text">
                  <p>
                    Hi, I’m John Carter, I’m 36 and I work as a Digital Designer
                    for the “dewwater” Agency in Ontario, Canada.
                  </p>
                </div>
              </div>

              <div className="personal-info-item">
                <div className="personal-info-item-head">
                  <img src={birthdayCakeImg} alt="user" />
                  Birthday:
                </div>

                <div className="personal-info-item-text">
                  <p>December 17, 1985</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="profile-content-main profile-section">
            ya toje
            <UserNewPost />
            <UserPosts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
