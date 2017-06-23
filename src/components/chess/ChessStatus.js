import React from 'react'
import PropTypes from 'prop-types'

import './ChessStatus.css'

export const ChessStatus = ({
  model,
  threats
}) => (
  <table className="chess-status">
    <tbody>
      <tr>
        <th className="chess-status__title-cell">Chromosome:</th>
        <td className="chess-status__content-cell">{model}</td>
      </tr>
      <tr>
        <th className="chess-status__title-cell">Number of threats:</th>
        <td className="chess-status__content-cell">{threats}</td>
      </tr>
    </tbody>
  </table>
)

ChessStatus.propTypes = {
  model: PropTypes.arrayOf(PropTypes.number),
  threats: PropTypes.number
}

ChessStatus.defaultProps = {
  model: new Array(8).fill(0),
  threats: 0
}
