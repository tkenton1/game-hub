import page from "../shared/GamePage.module.css";
import styles from "./SudokuPage.module.css";
import { useReducer } from "react";

import { Grid } from "./components/Grid";
import { createInitialState } from "./logic/state";
import { sudokuReducer } from "./logic/reducer";
import type { CellValue, Digit, Position } from "./logic/types"

export function SudokuPage() {

  const [state, dispatch] = useReducer(sudokuReducer, undefined, () => createInitialState());

  function handleCellChange(pos: Position, rawText: string) {
    const text = rawText.trim();

    let value: CellValue;

    if (text === "") {
      value = null;
    } else if (/^[1-9]$/.test(text)) {
      value = Number(text) as Digit; // converts "7" -> 7
    } else {
      return; // ignore invalid input
    }

    dispatch({ type: "setCellValue", pos, value });
  }

  return (
    <section className={page.page}>
      <header className={page.header}>
        <div>
          <h1 className={page.title}>Sudoku</h1>
          <p className={page.subtitle}>Solve puzzles by filling in the rows, columns and subgrids with digits from 1-9!</p>
        </div>

        <div className={page.actions}>
          <button
            className={styles.button}
            onClick={() => dispatch({ type: "reset" })}
          /> 
        </div>
      </header>

      <div className={page.panel}>
          <Grid grid={state.grid}
                onCellChange={handleCellChange} 
          />
      </div>
    </section>
  );
}