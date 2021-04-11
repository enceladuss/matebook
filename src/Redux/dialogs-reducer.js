import userImg from "../img/user.jpg";
import sideFriend1 from "../img/side-friend1.jpg";
import sideFriend2 from "../img/side-friend2.jpg";
import sideFriend3 from "../img/side-friend3.jpg";
import sideFriend4 from "../img/side-friend4.jpg";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                userAvatar: userImg,
                messageText: state.newMessageText,
                otherUser: false
            }

            if (state.newMessageText.length >= 1) {
                let stateCopy = {...state};
                stateCopy.messages = [...state.messages]
                stateCopy.messages.push(newMessage);
                stateCopy.newMessageText = '';
                return stateCopy;
            } else {
                console.log('message is empty')
            }
        case UPDATE_MESSAGE_TEXT:
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        default:
            return state;
    }

};
    export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
    export const onMessageChangeActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text})

    export default dialogsReducer;

