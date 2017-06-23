export function arrayToChessBoard(arrModel) {
  const newModel = new Array(8).fill(new Array(8).fill(0))
    .map((row, rowIndex) => (
      row.map((col, colIndex) => (
        arrModel[colIndex] === rowIndex ? 1 : 0
      ))
    ))
  return newModel
}
