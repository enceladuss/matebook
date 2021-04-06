import React from "react";

import StoreContext from "../../StoreContext";
import NavigationFriends from "./index";

const NavigationFriendsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();
                return <NavigationFriends state={state.navigationFriends}/>
            }
            }
        </StoreContext.Consumer>
    );
};

export default NavigationFriendsContainer;
