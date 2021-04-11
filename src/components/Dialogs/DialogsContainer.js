import React from "react";

import Dialogs from "./index";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state
    }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer;
