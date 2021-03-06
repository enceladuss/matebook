import "./normalize.css";
import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Pages/Profile";
import News from "./components/Pages/News";
import Dialogs from "./components/Pages/Dialogs";
import Settings from "./components/Pages/Settings";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app grid">
                <Header/>
                <Navigation/>
                <Route path="/Profile" component={Profile}/>
                <Route path="/News" component={News}/>
                <Route path="/Dialogs" component={Dialogs}/>
                <Route path="/Settings" component={Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
