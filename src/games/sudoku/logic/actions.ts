import type { CellValue, Position } from "./types";

export type SudokuAction =
  { type: "selectCell"; pos: Position | null } |
  { type: "setCellValue"; pos: Position; value: CellValue } | // allow null to clear a cell
  { type: "reset" } |
  { type: "loadPuzzle"; puzzle: CellValue[][] };