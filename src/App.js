import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tittle from './components/Tittle';
import UserChoice from './components/UserChoice';

function App() {
  return (
    <div>
      <Header/>
      <Tittle/>
      <UserChoice/>
    </div>
    
  );
}

export default App;
