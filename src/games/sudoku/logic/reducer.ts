import type { SudokuAction } from "./actions";
import type { SudokuState } from "./types";
import { selectCell, setCellValue } from "./update";

export function sudokuReducer(state: SudokuState, action: SudokuAction): SudokuState {
  switch(action.type) {
    case "selectCell": return(selectCell(state, action.pos));
    case "setCellValue": return(setCellValue(state, action.pos, action.value));
    default: return state;  
  }
};