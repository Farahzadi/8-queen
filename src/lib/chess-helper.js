import _ from 'lodash'

export function arrayToChessBoard(arrModel) {
  const newModel = new Array(8)
    .fill(new Array(8).fill(0))
    .map((row, rowIndex) => (row.map((col, colIndex) => (arrModel[colIndex] === rowIndex
      ? 1
      : 0))))
  return newModel
}

export function isMatrix(array) {
  const size = array[0].length
  return array.forEach(row => row.length === size)
}

export function getDiagonalIndexes(matrix) {
  const shape = [matrix.length, matrix[0].shape]
}

export function calcFitness(state) {
  const rowClashs = (state.length - _.uniq(state).length) * 2
  console.log(rowClashs)
}

calcFitness([0, 0, 0, 0, 0, 0, 0, 0])
