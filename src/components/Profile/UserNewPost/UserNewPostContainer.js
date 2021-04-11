import React from "react";

import UserNewPost from "./index";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(onPostChangeActionCreator(text))
        }
    }
}

const UserNewPostContainer = connect(mapStateToProps, mapDispatchToProps)(UserNewPost)

export default UserNewPostContainer;
