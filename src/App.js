import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login.js";
import {Register} from "./components/Register.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </header>
      </div>
    </Router>
  );
}

export default App;
