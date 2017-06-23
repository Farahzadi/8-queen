import React from 'react';
import './App.css';
import { ChessBoard } from './components/chess'

const App = () => (
  <div>
    <div className="chessboard-container">
      <ChessBoard />
    </div>
    <div className="chessboard-container">
      <ChessBoard />
    </div>
    <div className="chessboard-container">
      <ChessBoard />
    </div>
    <div className="chessboard-container">
      <ChessBoard />
    </div>
  </div>
)

export default App;
