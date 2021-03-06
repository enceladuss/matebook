import React from "react";

import "./UserNewPost.css";

import userImg from "./../../img/user.jpg";

const UserNewPost = () => {
  return (
    <div className="profile-sub-section user-new-post">
      <div className="section-head">
        <h3 className="h3">Create post</h3>
      </div>
      <form action="#" className="newPostForm">
        <div className="postFormInput">
          <img src={userImg} alt="" />
          <textarea
            name="newPostText"
            placeholder="Share some what you are thinking."
          ></textarea>
        </div>
        <button type="submit" className="btn buttonSubmit">
          Post
        </button>
      </form>
    </div>
  );
};

export default UserNewPost;
