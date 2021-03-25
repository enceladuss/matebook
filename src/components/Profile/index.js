import React from "react";

import "./Profile.scss";

import UserCard from "./UserCard";
import ProfileLeftSidebar from "./ProfileLeftSidebar";
import UserNewPost from "./UserNewPost";
import UserPost from "./UserPosts";
import ProfileRightSidebar from "./ProfileRightSidebar";

const Profile = (props) => {

    let postsElements = props.profilePage.posts.map((e, index) => <UserPost key={index} postAuthor={e.postAuthor}
                                                                      postAuthorAvatar={e.postAuthorAvatar}
                                                                      postText={e.postText}/>)

    // debugger
    return (
        <main className={`content profile-page`}>
            <div className="content-wrapp">
                <UserCard data={props.profilePage.userStatsData}/>

                <div className="profile-content-wrapper">
                    <ProfileLeftSidebar data={props.profilePage.personalInfoData}/>

                    <div className="profile-content-main profile-section">
                        <UserNewPost addPost={props.addPost} newPostText={props.profilePage.newPostText} updatePostText={props.updatePostText}/>

                        {postsElements}

                    </div>

                    <ProfileRightSidebar data={props.profilePage.links}/>
                </div>
            </div>
        </main>
    );
};

export default Profile;
