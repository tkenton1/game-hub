import type { Cell, GameState } from "./types";
import { calculateWinner, isDraw } from "./winner";
import { getNextPlayer } from "./state";

export function isMoveLegal(cells: Cell[], index: number): boolean {
  // (not) Out of range OR Space occupied 
  return !(index > cells.length || cells[index] != null);
}

export function applyMove(state: GameState, index: number): GameState {

  // Never apply if move if 'illegal' or not playing
  if(state.status != "playing" ||isMoveLegal(state.cells, index) == false) return state;

  // Copy state into an obj that can be modified + returned
  const nextCells = [...state.cells];
  nextCells[index] = state.currentPlayer;

  const nextState: GameState = { ...state, cells: nextCells };

  const win = calculateWinner(nextState.cells);
  const draw = isDraw(nextState.cells, win.winner);

  if(win.winner) {  // Game won
    nextState.status = "won"
    nextState.winningLine = win.winningLine;
    nextState.winner = win.winner;
  } else if(draw) { // Game drawn
    nextState.status = "draw";
  } else {          // Continue playing
    nextState.currentPlayer = getNextPlayer(nextState.currentPlayer);
  }

  return nextState;
}