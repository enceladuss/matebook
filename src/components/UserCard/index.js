import React from "react";

import c from "./UserCard.module.css";

import profileImg from '../../img/profile-image.jpg';
import userImg from "./../../img/user.jpg";

const UserCard = () => {
  return (
    <div className={`${c.user_card}`}>
      <div className={`${c.user_card__bg}`}>
        <img src={profileImg} alt="" />
      </div>
      <div className={`${c.user_card__info}`}>
        <div className={`${c.profile_author}`}>
          <div className={`${c.profile_author__thumb}`}>
            <img src={userImg} alt="" />
          </div>
          <div className={`${c.profile_author__info}`}>
            <h4 className={`${c.h4}`}>Jack Carter</h4>
            <span className={`${c.profile_author__country}`}>Ontario, CA</span>
          </div>
        </div>

        <div className={`${c.user_stats}`}>
          <div className={`${c.user_stats__item}`}>
            <h3 className={`${c.h3}`}>Posts</h3>
            <span>4</span>
          </div>
          <div className={`${c.user_stats__item}`}>
            <h3 className={`${c.h3}`}>Followers</h3>
            <span>33</span>
          </div>
          <div className={`${c.user_stats__item}`}>
            <h3 className={`${c.h3}`}>Following</h3>
            <span>12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
