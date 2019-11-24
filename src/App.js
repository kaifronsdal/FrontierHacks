import React from 'react';
import logo from './logo.svg';
import './App.css';
import ElectronHeader from "./components/electron_header";
import MessageCard from "./components/message_card";
import MainPage from "./pages/main_page";
import MessagingPage from "./pages/messaging_page";
import {Switch, Router, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
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
        </BrowserRouter>
    </div>
  );
}

export default App;
