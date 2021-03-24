import React from "react";

import "./Profile.scss";

import UserCard from "./UserCard";
import ProfileLeftSidebar from "./ProfileLeftSidebar";
import UserNewPost from "./UserNewPost";
import UserPost from "./UserPosts";
import ProfileRightSidebar from "./ProfileRightSidebar";

const Profile = (props) => {

    let postsElements = props.state.posts.map((e, index) => <UserPost key={index} postAuthor={e.postAuthor}
                                                                      postAuthorAvatar={e.postAuthorAvatar}
                                                                      postText={e.postText}/>)

    return (
        <main className={`content profile-page`}>
            <div className="content-wrapp">
                <UserCard data={props.state.userStatsData}/>

                <div className="profile-content-wrapper">
                    <ProfileLeftSidebar data={props.state.personalInfoData}/>

                    <div className="profile-content-main profile-section">
                        <UserNewPost addPost={props.addPost}/>

                        {postsElements}

                    </div>

                    <ProfileRightSidebar data={props.state.links}/>
                </div>
            </div>
        </main>
    );
};

export default Profile;
