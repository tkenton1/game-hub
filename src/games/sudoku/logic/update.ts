import type { SudokuState, CellValue, Position } from "./types";
import { computeConflicts, isSolved } from "./validate"

export function selectCell(state: SudokuState, pos: Position | null): SudokuState {
  const nextState: SudokuState = { ...state, selected: pos };
  return nextState;
}

export function setCellValue(state: SudokuState, pos: Position, val: CellValue): SudokuState {
  // Update new grid obj with val in pos row/col 
  const nextState: SudokuState = { ...state };
  nextState.grid[pos.row][pos.col] = val;
  nextState.conflicts = computeConflicts(nextState.grid);
  nextState.status = isSolved(nextState.grid, nextState.conflicts) ? "solved" : "playing";
  return nextState;
}