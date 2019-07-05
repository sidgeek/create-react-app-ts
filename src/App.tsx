import React from 'react';
import Description from './Description';
import Header from './Header';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header name="REACT1" />
      </header>
      <Description countBy={3} />
    </div>
  );
}

export default App;
