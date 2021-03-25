import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import {AddPost, updatePostText} from "./Redux/state";

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

