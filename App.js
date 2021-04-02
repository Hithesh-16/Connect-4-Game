import React from "react";
import Home from './Home';
import Player from './Player';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div >
        <nav id="nav">
          <ul >
            <li id="navItem">
              <Link to="/">Home</Link>
            </li>
            <li >
              <Link to="/Player">Player</Link>
            </li>
          </ul>
        </nav>
        <hr/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Player">
            <Player />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
