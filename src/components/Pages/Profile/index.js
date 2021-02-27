import React from "react";

import "./Profile.css";

import userImg from "../../../img/icons/user.svg";
import birthdayCakeImg from "../../../img/icons/birthday-cake.svg";
import globeImg from "../../../img/icons/globe.svg";
import briefCaseImg from "../../../img/icons/briefcase.svg";
import handShakeImg from "../../../img/icons/handshake.svg";
import envelopeImg from "../../../img/icons/envelope.svg";

import UserCard from "../../UserCard";
import UserNewPost from "../../UserNewPost";
import UserPosts from "../../UserPosts";

const Profile = () => {
  return (
    <main className={`content profile_page`}>
      <div className="content-wrapp">
        <UserCard />

        <div className="profile-content-wrapper">
          <aside className="profile-content-sidebar profile-section filled-section">
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

              <div className="personal-info-item">
                <div className="personal-info-item-head">
                  <img src={globeImg} alt="user" />
                  Country:
                </div>

                <div className="personal-info-item-text">
                  <p>San Francisco, California, USA</p>
                </div>
              </div>

              <div className="personal-info-item">
                <div className="personal-info-item-head">
                  <img src={briefCaseImg} alt="user" />
                  Occupation:
                </div>

                <div className="personal-info-item-text">
                  <p>UI/UX Designer</p>
                </div>
              </div>

              <div className="personal-info-item">
                <div className="personal-info-item-head">
                  <img src={envelopeImg} alt="user" />
                  Email & Website:
                </div>

                <div className="personal-info-item-text">
                  <p>
                    jackc85@gmail.com{" "}
                    <a href="https://www.artstation.com/jackcarter">
                      www.artstation.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="personal-info-item">
                <div className="personal-info-item-head">
                  <img src={handShakeImg} alt="user" />
                  Joined:
                </div>

                <div className="personal-info-item-text">
                  <p>December 20, 2021</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="profile-content-main profile-section">
            <UserNewPost />
            <UserPosts />
          </div>

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
                <p>© MateBook 2021. <br/> All Rights Reserved.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Profile;
