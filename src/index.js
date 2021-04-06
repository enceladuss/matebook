import reportWebVitals from './reportWebVitals';
import store from "./Redux/store-redux";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import StoreContext from "./StoreContext";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


renderEntireTree(store.getState());

store.subscribe(() => {
        let state = store.getState();
        renderEntireTree(state);
    }
);

reportWebVitals();
