import React from "react";

import "../Profile/Profile.css";

import UserCard from "./UserCard";
import ProfileLeftSidebar from "./ProfileLeftSidebar";
import UserNewPost from "./UserNewPost";
import UserPost from "./UserPosts";
import ProfileRightSidebar from "./ProfileRightSidebar";

const Profile = (props) => {

    let postsElements = props.posts.map( e => <UserPost postAuthor={e.postAuthor} postAuthorAvatar={e.postAuthorAvatar} postText={e.postText}/> )

    return (
        <main className={`content profile-page`}>
            <div className="content-wrapp">
                <UserCard data={props.userStatsData} />

                <div className="profile-content-wrapper">
                    <ProfileLeftSidebar data={props.personalInfoData}/>

                    <div className="profile-content-main profile-section">
                        <UserNewPost/>

                        { postsElements }

                    </div>

                    <ProfileRightSidebar data={props.links}/>
                </div>
            </div>
        </main>
    );
};

export default Profile;
