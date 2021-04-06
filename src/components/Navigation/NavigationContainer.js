import React from "react";
import Navigation from "./index";
import StoreContext from "../../StoreContext";

const NavigationContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();
                return <Navigation state={state.navigation}/>
            }
            }
        </StoreContext.Consumer>
    );
};

export default NavigationContainer;
