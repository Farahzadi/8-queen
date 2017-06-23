import React from 'react'

import { ChessBoard, ChessStatus } from './index'

import './Chess.css'

export const Chess = props => (
  <div className="container">
    <div>
      <ChessBoard {...props} />
    </div>
    <div>
      <ChessStatus {...props} />
    </div>
  </div>
)
