import React from "react";

import "./UserNewPost.scss";

import userImg from "../../../img/user.jpg";

const UserNewPost = () => {

    let newPostElement = React.createRef();

    let addPost = () => {
        console.log(newPostElement.current.value);
    }

  return (
    <div className="profile-sub-section user-new-post">
      <div className="section-head">
        <h3 className="h3">Create post</h3>
      </div>
      <div className="newPostForm">
        <div className="postFormInput">
          <img src={userImg} alt="" />
          <textarea
            ref={newPostElement}
            name="newPostText"
            placeholder="Share some what you are thinking."
          ></textarea>
        </div>
        <button onClick={ addPost } className="btn buttonSubmit">
          Post
        </button>
      </div>
    </div>
  );
};

export default UserNewPost;
