import reportWebVitals from './reportWebVitals';
import state, {AddPost, subscribe, updatePostText} from "./Redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={AddPost} updatePostText={updatePostText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(state);

subscribe(renderEntireTree);

reportWebVitals();
