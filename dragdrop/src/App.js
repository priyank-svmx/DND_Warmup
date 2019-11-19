import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from "./components/Board";


function App() {
  return (
    <div className="App">
      <Board knightPosition={[1,0]}/>
    </div>
  );
}

export default App;
