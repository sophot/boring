import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import FooterButtons from "./components/FooterButtons";
import Chats from "./components/Chats";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>🔥 TINDER CLONE 🔥</h1>
      <Router>
        <Switch>
          <Route path="/profile">
            <Header backButton="/" />
            <h2>profile page</h2>
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
          </Route>
        </Switch>
      </Router>
      <FooterButtons />
    </div>
  );
}

export default App;
