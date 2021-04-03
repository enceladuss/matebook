import sideFriend1 from "../img/side-friend1.jpg";
import sideFriend2 from "../img/side-friend2.jpg";
import sideFriend3 from "../img/side-friend3.jpg";
import sideFriend4 from "../img/side-friend4.jpg";

let initialState = [
        {id: 1, navPath: '/dialogs/1', navImg: sideFriend1, navTitle: 'Andrew'},
        {id: 2, navPath: '/dialogs/2', navImg: sideFriend2, navTitle: 'Dimych'},
        {id: 3, navPath: '/dialogs/3', navImg: sideFriend3, navTitle: 'Sveta'},
        {id: 4, navPath: '/dialogs/4', navImg: sideFriend4, navTitle: 'Anna'},
]

const navigationFriendsReducer = (state = initialState, action) => {
    return state;
};

export  default  navigationFriendsReducer;

