import React from 'react'
import { arrayToChessBoard } from '../../lib/chess-helper'

export class ChessBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      model: new Array(8).fill(0)
    }
  }

  render() {
    return (
      <table>
        <tbody>
          {
            arrayToChessBoard(this.state.model).map((row, rowIndex) => (
              <tr key={String(rowIndex)}>
                {
                  row.map((col, colIndex) => (
                    <td key={String(colIndex)}>{col}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}
