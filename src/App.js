
import "./normalize.css";
import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Pages/Profile";

function App() {
  return (
    <>
      <div className="app grid">
        <Header />
        <Navigation />

        <Profile />
      </div>
    </>
  );
}

export default App;
