import React from "react";

import "../Profile/Profile.css";

import UserCard from "../../UserCard";
import ProfileLeftSidebar from "../../ProfileLeftSidebar";
import UserNewPost from "../../UserNewPost";
import UserPost from "../../UserPosts";
import ProfileRightSidebar from "../../ProfileRightSidebar";
import userImg from "../../../img/user.jpg";
import userImg2 from "../../../img/user-img-2.jpg";

const Profile = () => {

    let posts = [
        {id:'1', postAuthor: 'Jason Borne', postAuthorAvatar:userImg2, postText: 'Hi, how are you?' },
        {id:'2', postAuthor: 'Jason Borne', postAuthorAvatar:userImg2, postText: 'World\'s most beautiful car in Curabitur! the most beautiful car available in america and the saudi arabia, you can book your test drive by our official website  www.audiusa.com' },
    ]

    let postsElements = posts.map( e => <UserPost postAuthor={e.postAuthor} postAuthorAvatar={e.postAuthorAvatar} postText={e.postText}/> )

    return (
        <main className={`content profile-page`}>
            <div className="content-wrapp">
                <UserCard/>

                <div className="profile-content-wrapper">
                    <ProfileLeftSidebar/>

                    <div className="profile-content-main profile-section">
                        <UserNewPost/>

                        { postsElements }

                    </div>

                    <ProfileRightSidebar/>
                </div>
            </div>
        </main>
    );
};

export default Profile;
