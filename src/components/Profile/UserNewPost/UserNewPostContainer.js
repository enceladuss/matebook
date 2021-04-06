import React from "react";

import UserNewPost from "./index";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import Dialogs from "../../Dialogs";


const UserNewPostContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { store => {

                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    store.dispatch(onPostChangeActionCreator(text))
                }

                return (
                    <UserNewPost updateNewPostText={onPostChange} addPost={addPost} newPostText={state.profilePage.newPostText}  />
                );
            }
            }
        </StoreContext.Consumer>
    );

};

export default UserNewPostContainer;
