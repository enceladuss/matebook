import "./normalize.css";
import "./App.scss";

import Header from "./components/Header";
import News from "./components/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Settings from './components/Settings';
import {BrowserRouter, NavLink, Redirect, Route} from "react-router-dom";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import NavigationFriendsContainer from "./components/NavigationFriends/NavigationFriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App(props) {
    return (
        <div className="app grid">
            <Header/>
            <NavigationContainer />
            <NavigationFriendsContainer />
            <Route exact path="/" render={() => (
                <Redirect to="/Profile"/>
            )}/>

            <Route path="/Profile" render={() => <ProfileContainer />}/>
            <Route path="/News" render={() => <News/>}/>
            <Route path="/Dialogs" render={() => <DialogsContainer />}/>
            <Route path="/Settings" render={() => <Settings/>}/>
        </div>
    );
}

export default App;
