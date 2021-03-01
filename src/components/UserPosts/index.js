import React from "react";

import "./UserPosts.css";

import userImg from "./../../img/user-img-2.jpg";

const UserPosts = (props) => {
  return (
    <div className="profile-sub-section user-post">
      <div className="user-post-head">
        <img src={userImg} alt="" />
        <div className="postAuthor">
          <a href="#">{props.postAuthor}</a>
          <span>February 2, 19:05 PM</span>
        </div>
      </div>

      <div className="user-post-content">
        <p>{props.postText}</p>
      </div>
    </div>
  );
};

export default UserPosts;
