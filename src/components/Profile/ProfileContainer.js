import React from "react";
import StoreContext from "../../StoreContext";
import Profile from "./index";

const ProfileContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();
                return <Profile state={state}/>
            }
            }
        </StoreContext.Consumer>
    );
};

export default ProfileContainer;
