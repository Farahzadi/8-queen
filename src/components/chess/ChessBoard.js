import React from 'react'
import PropTypes from 'prop-types'

import { arrayToChessBoard } from '../../lib/chess-helper'

import './ChessBoard.css'

function generateQueen(value) {
  return value ? <span>&#9813;</span> : null
}

export const ChessBoard = ({ model }) => (
  <table className="chess-board">
    <tbody>
      {
        arrayToChessBoard(model).map((row, rowIndex) => (
          <tr className="chess-board__row" key={String(rowIndex)}>
            {
              row.map((col, colIndex) => (
                <td
                  className="chess-board__cell"
                  key={String(colIndex)}
                >
                  {generateQueen(col)}
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </table>
)

ChessBoard.propTypes = {
  model: PropTypes.arrayOf(PropTypes.number).isRequired
}

ChessBoard.defaultProps = {
  model: [0, 0, 0, 0, 0, 0, 0, 0]
}
