import React from "react";

import UserNewPost from "./index";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";


const UserNewPostContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text))
    }

    return (
        <UserNewPost updateNewPostText={onPostChange} addPost={addPost} newPostText={state.profilePage.newPostText}  />
    );
};

export default UserNewPostContainer;
