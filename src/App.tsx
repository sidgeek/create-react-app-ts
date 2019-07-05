import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Description from "./Description";
import Header from "./Header";
import logo from "./logo.svg";
import Home from './pages/Home'
import About from './pages/About'
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header name="REACT" />
        </header>
        <Description countBy={3} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
