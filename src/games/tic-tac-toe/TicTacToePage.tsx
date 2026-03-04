import page from "../shared/GamePage.module.css";
import styles from "./TicTacToePage.module.css";
import { useState } from "react";
import { Board } from "./components/Board";
import { createInitialState, getStatusText } from "./logic/state";
import { applyMove } from "./logic/moves";
import type { GameState } from "./logic/types";


export function TicTacToePage() {

  const [gameState, setGameState] = useState<GameState>(createInitialState);

  return (
    <section className={page.page}>
      <header className={page.header}>
        <div>
          <h1 className={page.title}>Tic-Tac-Toe</h1>
          <p className={page.subtitle}>The classic game of three in a row!</p>
        </div>

        <div className={page.actions}>
          <button className={styles.button}
                  onClick={() => setGameState(createInitialState())}>
                    Reset
          </button>
        </div>
      </header>

      <div className={page.panel}>
        <p>{ getStatusText(gameState) }</p>
        <Board  cells={gameState.cells} 
                onCellClick={(index) => setGameState((prev) => applyMove(prev, index))}
                disabled={gameState.status != "playing"} 
                winningLine={gameState.winningLine} />
      </div>
    </section>
  );
}