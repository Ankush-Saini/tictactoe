import React from 'react';
import logo from './logo.svg';
import './App.css';

import TicTacToe from './TicTacToe/TicTacToe';

function App() {
  return (
    <div className="App">
      <div style = 'text-align:center;'>Ankush's React SandBox</div>
      <div id="root">
      <div style = 'text-align:center;'>Ankush's React SandBox</div>
        <TicTacToe />  
      </div>
      
      {/* <Board></Board> */}
    </div>
  );
}

export default App;
