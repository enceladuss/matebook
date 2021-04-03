import reportWebVitals from './reportWebVitals';
import store from "./Redux/store-redux";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
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
