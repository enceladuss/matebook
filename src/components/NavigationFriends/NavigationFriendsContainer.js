import React from "react";

import NavigationFriends from "./index";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.navigationFriends
    }
}

const NavigationFriendsContainer = connect(mapStateToProps)(NavigationFriends)

export default NavigationFriendsContainer;
