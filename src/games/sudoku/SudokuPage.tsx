import page from "../shared/GamePage.module.css";
import styles from "./SudokuPage.module.css";
import { useReducer } from "react";

import { Grid } from "./components/Grid";
import { createInitialState } from "./logic/state";
import { sudokuReducer } from "./logic/reducer";
import type { CellValue, Digit, Position } from "./logic/types"
import { PUZZLE_1 } from "./logic/puzzles"

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
            onClick={() => dispatch({ type: "loadPuzzle", puzzle: PUZZLE_1 })}
          >
            Easy
          </button> 
          <button
            className={styles.button}
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button> 
        </div>
      </header>

      <div className={page.panel}>
        {state.status === "solved" && (
          <div className={styles.solvedBanner} role="status" aria-live="polite">
            <div className={styles.solvedBannerText}>
              <div>🎉 Solved!</div>
              <div className={styles.solvedBannerSubtext}>Yay! You did it!</div>
            </div>
          </div>
        )} 
        <Grid grid={state.grid}
              conflicts={state.conflicts}
              onCellChange={handleCellChange} 
        />
      </div>
    </section>
  );
}