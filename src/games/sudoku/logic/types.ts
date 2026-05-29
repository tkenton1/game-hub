export const SIZE: number = 9;

export type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;
export type CellValue = Digit | null;

export type Position = {
  row: number,
  col: number
};

export type SudokuStatus = "playing" | "solved";

export type SudokuState = {
  given: CellValue[][],
  grid: CellValue[][],
  selected: Position | null,
  conflicts: Set<string>,
  status: SudokuStatus
};