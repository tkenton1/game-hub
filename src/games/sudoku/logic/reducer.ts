import type { SudokuAction } from "./actions";
import type { SudokuState } from "./types";
import { createInitialState } from "./state";
import { selectCell, setCellValue } from "./update";

export function sudokuReducer(state: SudokuState, action: SudokuAction): SudokuState {
  switch(action.type) {
    case "loadPuzzle":  return createInitialState(action.puzzle);
    case "selectCell": return(selectCell(state, action.pos));
    case "setCellValue": return(setCellValue(state, action.pos, action.value));
    default: return state;  
  }
};