import "./normalize.css";
import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import News from "./components/News";
import Dialogs from "./components/Dialogs";
import Settings from './components/Settings';
import {BrowserRouter, Redirect, Route} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app grid">
                <Header/>
                <Navigation/>

                <Route exact path="/" render={() => (
                    <Redirect to="/Profile"/>
                )}/>

                <Route path="/Profile" render={ () => <Profile posts={props.posts} userStatsData={props.userStatsData} personalInfoData={props.personalInfoData} links={props.links} /> }/>
                <Route path="/News" component={News}/>
                <Route path="/Dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
                <Route path="/Settings" component={Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
