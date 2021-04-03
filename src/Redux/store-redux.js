import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navigationReducer from "./navigation-reducer";
import navigationFriendsReducer from "./navigationFriends-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navigation: navigationReducer,
    navigationFriends: navigationFriendsReducer
});

let store = createStore(reducers);

export default  store;