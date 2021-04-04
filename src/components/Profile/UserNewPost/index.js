import React from "react";

import "./UserNewPost.scss";

import userImg from "../../../img/user.jpg";

const UserNewPost = (props) => {

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        props.updateNewPostText(e.target.value);
    }

    return (
        <div className="profile-sub-section user-new-post">
            <div className="section-head">
                <h3 className="h3">Create post</h3>
            </div>
            <div className="newPostForm">
                <div className="postFormInput">
                    <img src={userImg} alt=""/>
                    <textarea onChange={onPostChange} name="newPostText"
                              placeholder="Share some what you are thinking." value={props.newPostText}/>
                </div>
                <button onClick={onAddPost} className="btn buttonSubmit">
                    Post
                </button>
            </div>
        </div>
    );
};

export default UserNewPost;
