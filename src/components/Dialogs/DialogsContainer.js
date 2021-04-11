import React from "react";

import Dialogs from "./index";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state
    }
}

let mapDispatchToProps = () => {return}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
