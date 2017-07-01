import { arrayToChessBoard, calcFitness } from './chess-helper'

it('check if arrayToChessBoard works fine', () => {
  expect(arrayToChessBoard([0, 0, 0, 0, 0, 0, 0, 0])).toEqual(
    [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ]
  )
  expect(arrayToChessBoard([0, 0, 0, 3, 0, 0, 0, 0])).toEqual(
    [
      [1, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ]
  )
})

it('test calculating fitness from chromosome', () => {
  expect(calcFitness([0, 0, 0, 0, 0, 0, 0, 0])).toBe(-56)
  expect(calcFitness([1, 3, 4, 0, 7, 4, 6, 2])).toBe(-6)
  expect(calcFitness([1, 3, 4, 0, 6, 4, 6, 2])).toBe(-12)
  expect(calcFitness([3, 5, 7, 1, 6, 0, 2, 4])).toBe(0)
})
