import React from 'react';
import './App.css';
import Header from './components/Header';
import Tittle from './components/Tittle';
import UserChoice from './components/UserChoice';
import Statistics from './components/Statistics';


function App() {
  return (
    <div>
      <Header/>
      <Tittle/>
      <UserChoice/>
      <Statistics/>
    </div>
    
  );
}

export default App;
