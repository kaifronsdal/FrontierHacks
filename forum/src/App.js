import ReactDOM from 'react-dom';
import React from 'react';
import logo from './logo.svg';
import Landing from './Pages/landing';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>

      
      <Landing>

      </Landing>
      <Switch>
          <Route path="/Components"></Route>
          <Route path="/post.js"></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;