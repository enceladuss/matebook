import React from "react";
import Profile from "./index";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state
    }
}

const ProfileContainer = connect(mapStateToProps)(Profile)

export default ProfileContainer;
