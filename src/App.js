import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./component/header.component.jsx";
import TinderCards from "./component/tinderCard.component.jsx";
import SwipeButtons from "./component/swipeButton.component.jsx";
import Chats from "./component/chats.component";
import ChatScreen from "./component/chatscreen.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
