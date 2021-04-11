import React from "react";
import Navigation from "./index";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.navigation
    }
}


const NavigationContainer = connect(mapStateToProps)(Navigation)

export default NavigationContainer;
