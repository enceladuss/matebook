import "./normalize.css";
import "./App.scss";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NavigationFriends from "./components/NavigationFriends";
import Profile from "./components/Profile";
import News from "./components/News";
import Dialogs from "./components/Dialogs";
import Settings from './components/Settings';
import {BrowserRouter, NavLink, Redirect, Route} from "react-router-dom";

import {AddPost} from "./Redux/state";

function App(props) {
    return (
        <div className="app grid">
            <Header/>
            <Navigation state={props.state.navigation}/>
            <NavigationFriends state={props.state.navigationFriends}/>
            <Route exact path="/" render={() => (
                <Redirect to="/Profile"/>
            )}/>

            <Route path="/Profile" render={() => <Profile state={props.state.profilePage} addPost={AddPost}/>}/>
            <Route path="/News" render={() => <News/>}/>
            <Route path="/Dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
            <Route path="/Settings" render={() => <Settings/>}/>
        </div>
    );
}

export default App;
