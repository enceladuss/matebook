import React from "react";

import "./UserPosts.css";

import userImg from "./../../img/user-img-2.jpg";

const UserPosts = () => {
  return (
    <div className="profile-sub-section user-post">
      <div className="user-post-head">
        <img src={userImg} alt="" />
        <div className="postAuthor">
          <a href="#">Jason Borne</a>
          <span>published: February 2, 19:05 PM</span>
        </div>
      </div>

      <div className="user-post-content">
        <p>
          World's most beautiful car in Curabitur! the most beatuiful car
          available in america and the saudia arabia, you can book your test
          drive by our official website <a target="_blank" href="https://www.audiusa.com/">www.audiusa.com</a>
        </p>
      </div>
    </div>
  );
};

export default UserPosts;
