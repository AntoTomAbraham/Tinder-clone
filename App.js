import React from 'react';
import './App.css';
import Header from './Header.js'; 
import Tindercards from './Tindercards';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import SwipeButtons from './SwipeButtons';
import Chat from "./Chat";
import ChatScreen from "./ChatScreen";
function App() {
  return (
    <div className="App">
       <Router>
      <Switch>
      <Route path='/chat/:person'>
          <Header backButton="/chat" />
          <ChatScreen />
        </Route>
        <Route path='/chat'>
          <Header backButton="/chat" />
          <Chat />
        </Route>
        <Route path='/'>
          <Header />
          <Tindercards />
          <SwipeButtons />
        </Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
