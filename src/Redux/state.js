// Application data

import userImg from "../img/user.jpg";
import userImg2 from "../img/user-img-2.jpg";
import userIcon from "../img/icons/user.svg";
import birthdayCakeImg from "../img/icons/birthday-cake.svg";
import globeImg from "../img/icons/globe.svg";
import briefCaseImg from "../img/icons/briefcase.svg";
import envelopeImg from "../img/icons/envelope.svg";
import handShakeImg from "../img/icons/handshake.svg";
import profileImg from "../img/icons/profile.png";
import newsImg from "../img/icons/news.png";
import messageImg from "../img/icons/message.png";
import settingsImg from "../img/icons/settings.png";
import sideFriend1 from "../img/side-friend1.jpg";
import sideFriend2 from "../img/side-friend2.jpg";
import sideFriend3 from "../img/side-friend3.jpg";
import sideFriend4 from "../img/side-friend4.jpg";

let renderEntireTree;

let store = {
    _state: {
        navigation: [
            {id: 1, navPath: '/profile', navImg: profileImg, navTitle: 'Profile'},
            {id: 2, navPath: '/news', navImg: newsImg, navTitle: 'News'},
            {id: 3, navPath: '/dialogs', navImg: messageImg, navTitle: 'Dialogs'},
            {id: 4, navPath: '/settings', navImg: settingsImg, navTitle: 'Settings'},
        ],
        navigationFriends: [
            {id: 1, navPath: '/dialogs/1', navImg: sideFriend1, navTitle: 'Andrew'},
            {id: 2, navPath: '/dialogs/2', navImg: sideFriend2, navTitle: 'Dimych'},
            {id: 3, navPath: '/dialogs/3', navImg: sideFriend3, navTitle: 'Sveta'},
            {id: 4, navPath: '/dialogs/4', navImg: sideFriend4, navTitle: 'Anna'},
        ],
        profilePage: {
            posts: [
                {id: 1, postAuthor: 'Jason Borne', postAuthorAvatar: userImg2, postText: 'Hi, how are you?'},
                {
                    id: 2,
                    postAuthor: 'Jason Borne',
                    postAuthorAvatar: userImg2,
                    postText: 'World\'s most beautiful car in Curabitur! the most beautiful car available in america and the saudi arabia, you can book your test drive by our official website  www.audiusa.com'
                },
            ],

            userStatsData: [
                {id: 1, statsHead: 'Posts', statsValue: '4'},
                {id: 2, statsHead: 'Followers', statsValue: '33'},
                {id: 3, statsHead: 'Following', statsValue: '12'}
            ],

            personalInfoData: [
                {
                    id: 1,
                    itemIcon: userIcon,
                    itemHead: 'About Me:',
                    itemText: 'Hi, I’m John Carter, I’m 36 and I work as a Digital Designer for the “dewwater” Agency in Ontario, Canada.'
                },
                {id: 2, itemIcon: birthdayCakeImg, itemHead: 'Birthday:', itemText: 'December 17, 1985'},
                {id: 3, itemIcon: globeImg, itemHead: 'Country:', itemText: 'San Francisco, California, USA'},
                {id: 4, itemIcon: briefCaseImg, itemHead: 'Occupation:', itemText: 'UI/UX Designer'},
                {id: 5, itemIcon: envelopeImg, itemHead: 'Email & Website:', itemText: 'jackc85@gmail.com'},
                {id: 6, itemIcon: handShakeImg, itemHead: 'Joined:', itemText: 'December 20, 2021'},
            ],

            links: [
                {id: 1, link: '#', linkText: 'about'},
                {id: 2, link: '#', linkText: 'career'},
                {id: 3, link: '#', linkText: 'advertise'},
                {id: 4, link: '#', linkText: 'Apps'},
                {id: 5, link: '#', linkText: 'Blog'},
                {id: 6, link: '#', linkText: 'Help'},
                {id: 7, link: '#', linkText: 'Gifts'},
                {id: 8, link: '#', linkText: 'content policy'},
                {id: 9, link: '#', linkText: 'User Policy'},
            ],

            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, userAvatar: sideFriend1, userName: 'Andrew'},
                {id: 2, userAvatar: sideFriend2, userName: 'Dimych'},
                {id: 3, userAvatar: sideFriend3, userName: 'Sveta'},
                {id: 4, userAvatar: sideFriend4, userName: 'Anna'}
            ],

            messages: [
                {id: 1, userAvatar: userImg, messageText: 'Lorem ipsum dolor sit amet', otherUser: true},
                {
                    id: 2,
                    userAvatar: userImg,
                    messageText: 'Lorem ipsum dolor sit amet 228 consectetur adipisicing elit. Minus, odio.',
                    otherUser: false
                },
                {
                    id: 3,
                    userAvatar: userImg,
                    messageText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, odio.',
                    otherUser: true
                }
            ]
        }
    },
    renderEntireTree(){},
    subscribe(observer){
        renderEntireTree = observer;
    },
    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                postAuthor: 'Jason Borne', postAuthorAvatar: userImg2, postText: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = '';
            renderEntireTree(this._state);
        } else if (action.type === 'UPDATE-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            renderEntireTree(this._state);
        }
    }
}

export default store;
