import React from "react";
import Navigation from "./index";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.navigation
    }
}

let mapDispatchToProps = () => {return}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default NavigationContainer;
