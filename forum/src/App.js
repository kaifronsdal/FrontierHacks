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
        return (<Landing/>);
    }
}

export default App;
