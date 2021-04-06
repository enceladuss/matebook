import React from "react";

import Dialogs from "./index";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();
                return <Dialogs state={state}/>
            }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
