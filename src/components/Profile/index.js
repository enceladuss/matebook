import React from "react";

import "./Profile.scss";

import UserCard from "./UserCard";
import ProfileLeftSidebar from "./ProfileLeftSidebar";
import UserPost from "./UserPosts";
import ProfileRightSidebar from "./ProfileRightSidebar";
import UserNewPostContainer from "./UserNewPost/UserNewPostContainer";

const Profile = (props) => {


    // MOVE INTO SEPARATE COMPONENT
    let postsElements = props.state.profilePage.posts.map((e, index) => <UserPost key={index} postAuthor={e.postAuthor}
                                                                            postAuthorAvatar={e.postAuthorAvatar}
                                                                            postText={e.postText}/>)

    return (
        <main className={`content profile-page`}>
            <div className="content-wrapp">
                <UserCard data={props.state.profilePage.userStatsData}/>

                <div className="profile-content-wrapper">
                    <ProfileLeftSidebar data={props.state.profilePage.personalInfoData}/>

                    <div className="profile-content-main profile-section">

                        <UserNewPostContainer />

                        {postsElements}

                    </div>

                    <ProfileRightSidebar data={props.state.profilePage.links}/>
                </div>
            </div>
        </main>
    );
};

export default Profile;
