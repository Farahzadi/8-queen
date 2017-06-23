import React from 'react'
import PropTypes from 'prop-types'

export const ChessStatus = ({
  chromosume,
  threats
}) => (
  <table>
    <tbody>
      <tr>
        <th>chromosume:</th>
        <td>{chromosume}</td>
      </tr>
      <tr>
        <th>Number of threats:</th>
        <td>{threats}</td>
      </tr>
    </tbody>
  </table>
)

ChessStatus.propTypes = {
  chromosume: PropTypes.arrayOf(PropTypes.number),
  threats: PropTypes.number
}

ChessStatus.defaultProps = {
  chromosume: new Array(8).fill(0),
  threats: 0
}
