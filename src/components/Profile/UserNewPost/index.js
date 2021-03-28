import React from "react";

import "./UserNewPost.scss";

import userImg from "../../../img/user.jpg";

const UserNewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {
        let newVar = {type: 'UPDATE-POST-TEXT', newText: newPostElement.current.value};
        props.dispatch(newVar)
    }

    return (
        <div className="profile-sub-section user-new-post">
            <div className="section-head">
                <h3 className="h3">Create post</h3>
            </div>
            <div className="newPostForm">
                <div className="postFormInput">
                    <img src={userImg} alt=""/>
                    <textarea ref={newPostElement} onChange={onPostChange} name="newPostText"
                              placeholder="Share some what you are thinking." value={props.newPostText}/>
                </div>
                <button onClick={addPost} className="btn buttonSubmit">
                    Post
                </button>
            </div>
        </div>
    );
};

export default UserNewPost;
