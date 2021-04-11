import React from "react";

import NavigationFriends from "./index";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.navigationFriends
    }
}

let mapDispatchToProps = () => {return}

const NavigationFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationFriends)

export default NavigationFriendsContainer;
