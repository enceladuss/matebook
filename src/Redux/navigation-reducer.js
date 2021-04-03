import profileImg from "../img/icons/profile.png";
import newsImg from "../img/icons/news.png";
import messageImg from "../img/icons/message.png";
import settingsImg from "../img/icons/settings.png";

let initialState = [
        {id: 1, navPath: '/profile', navImg: profileImg, navTitle: 'Profile'},
        {id: 2, navPath: '/news', navImg: newsImg, navTitle: 'News'},
        {id: 3, navPath: '/dialogs', navImg: messageImg, navTitle: 'Dialogs'},
        {id: 4, navPath: '/settings', navImg: settingsImg, navTitle: 'Settings'},
]

const navigationReducer = (state = initialState, action) => {
    return state;
};

export  default  navigationReducer;

