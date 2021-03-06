import React from "react";

import "../Profile/Profile.css";

import UserCard from "../../UserCard";
import ProfileLeftSidebar from "../../ProfileLeftSidebar";
import UserNewPost from "../../UserNewPost";
import UserPosts from "../../UserPosts";
import ProfileRightSidebar from "../../ProfileRightSidebar";

const Profile = () => {
    return (
        <main className={`content profile-page`}>
            <div className="content-wrapp">
                <UserCard/>

                <div className="profile-content-wrapper">
                    <ProfileLeftSidebar/>

                    <div className="profile-content-main profile-section">
                        <UserNewPost/>
                        <UserPosts postAuthor="Jason Borne"
                                   postText="World's most beautiful car in Curabitur! the most beautiful car available in america and the saudi arabia, you can book your test drive by our official website  www.audiusa.com"/>
                        <UserPosts postAuthor="Jason Borne" postText="Hi, how are you?"/>
                    </div>

                    <ProfileRightSidebar/>
                </div>
            </div>
        </main>
    );
};

export default Profile;
