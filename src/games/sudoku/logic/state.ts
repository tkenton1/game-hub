import type { CellValue, SudokuState } from "./types";
import { SIZE } from "./types";

export function createEmptyGrid(): CellValue[][] {
  const emptyGrid: CellValue[][] = new Array(SIZE);

  for(let i = 0; i < emptyGrid.length; ++i) {
    const emptySubGrid : CellValue[] = new Array(SIZE).fill(null);
    emptyGrid[i] = emptySubGrid;
  }

  return emptyGrid
}

// Make sure to never mutate original puzzle and have no conflicts between "given" and "grid"
export function cloneGrid(puzzle: CellValue[][]): CellValue[][] {
  const clonedGrid: CellValue[][] = new Array(puzzle.length);

  for(let i = 0; i < clonedGrid.length; ++i) {
    clonedGrid[i] = [...puzzle[i]]
  }

  return clonedGrid
}


// Puzzle to be passed through by a generator?
export function createInitialState(puzzle?: CellValue[][]): SudokuState {
  if(!puzzle) puzzle = createEmptyGrid();
  return {
    given: cloneGrid(puzzle),
    grid: cloneGrid(puzzle),
    selected: null,
    conflicts: new Set<string>(),
    status: "playing"
  };
}