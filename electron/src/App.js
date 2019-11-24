import React from 'react';
import logo from './logo.svg';
import './App.css';
import ElectronHeader from "./components/electron_header";
import MessageCard from "./components/message_card";
import MainPage from "./pages/main_page";
import MessagingPage from "./pages/messaging_page";
import {Switch, Router, Route, HashRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Switch>
            <Route path="/home">
                <MainPage/>
            </Route>
            <Route path="/messages">
                <MessagingPage/>
            </Route>

            <Route path="/">
                <MainPage/>
            </Route>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
