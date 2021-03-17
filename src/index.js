import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import userImg from "./img/user.jpg";
import userImg2 from "./img/user-img-2.jpg";
import birthdayCakeImg from "./img/icons/birthday-cake.svg";
import globeImg from "./img/icons/globe.svg";
import briefCaseImg from "./img/icons/briefcase.svg";
import envelopeImg from "./img/icons/envelope.svg";
import handShakeImg from "./img/icons/handshake.svg";

// Application data

let dialogs = [
    {id:'1', userAvatar:userImg, userName:'Andrew' },
    {id:'2', userAvatar:userImg, userName:'Dimych' },
    {id:'3', userAvatar:userImg, userName:'Anton' }
]

let messages = [
    {id:'1', userAvatar:userImg, messageText:'Lorem ipsum dolor sit amet', otherUser: true },
    {id:'2', userAvatar:userImg, messageText:'Lorem ipsum dolor sit amet 228 consectetur adipisicing elit. Minus, odio.', otherUser: false },
    {id:'3', userAvatar:userImg, messageText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, odio.', otherUser: true }
]

let posts = [
    {id:'1', postAuthor: 'Jason Borne', postAuthorAvatar:userImg2, postText: 'Hi, how are you?' },
    {id:'2', postAuthor: 'Jason Borne', postAuthorAvatar:userImg2, postText: 'World\'s most beautiful car in Curabitur! the most beautiful car available in america and the saudi arabia, you can book your test drive by our official website  www.audiusa.com' },
]

let userStatsData = [
    {id: 1, statsHead: 'Posts', statsValue: '4'},
    {id: 2, statsHead: 'Followers', statsValue: '33'},
    {id: 3, statsHead: 'Following', statsValue: '12'}
];

let personalInfoData = [
    {id: 1,itemIcon: userImg,itemHead: 'About Me:', itemText: 'Hi, I’m John Carter, I’m 36 and I work as a Digital Designer for the “dewwater” Agency in Ontario, Canada.' },
    {id: 2,itemIcon: birthdayCakeImg,itemHead: 'Birthday:', itemText: 'December 17, 1985' },
    {id: 3,itemIcon: globeImg,itemHead: 'Country:', itemText: 'San Francisco, California, USA' },
    {id: 4,itemIcon: briefCaseImg,itemHead: 'Occupation:', itemText: 'UI/UX Designer' },
    {id: 5,itemIcon: envelopeImg,itemHead: 'Email & Website:', itemText: 'jackc85@gmail.com' },
    {id: 6,itemIcon: handShakeImg,itemHead: 'Joined:', itemText: 'December 20, 2021' },
];

let links = [
    {id: 1, link:'#', linkText: 'about'},
    {id: 2, link:'#', linkText: 'career'},
    {id: 3, link:'#', linkText: 'advertise'},
    {id: 4, link:'#', linkText: 'Apps'},
    {id: 5, link:'#', linkText: 'Blog'},
    {id: 6, link:'#', linkText: 'Help'},
    {id: 7, link:'#', linkText: 'Gifts'},
    {id: 8, link:'#', linkText: 'content policy'},
    {id: 9, link:'#', linkText: 'User Policy'},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} userStatsData={userStatsData} personalInfoData={personalInfoData} links={links}  />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
