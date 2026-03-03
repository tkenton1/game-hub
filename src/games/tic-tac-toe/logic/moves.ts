import type { Cell, Player, GameState } from "./types";
import { calculateWinner, isDraw } from "./winner";
import { getNextPlayer, getStatusText } from "./state";

export function isMoveLegal(cells: Cell[], index: number): boolean {
  // Out of range
  if(index > cells.length) return false;

  // Space occupied
  if(cells[index] != null) return false;

  return true;
}

export function applyMove(state: GameState, index: number): GameState {
  if(state.status != "playing") return state;

  if(isMoveLegal(state.cells, index) == false) return state;

  const nextCells = [...state.cells];
  nextCells[index] = state.currentPlayer;

  const nextState: GameState = { ...state, cells: nextCells };

  const win = calculateWinner(nextState.cells);
  const draw = isDraw(nextState.cells, win.winner);
  // Game won
  if(win.winner) {
    nextState.status = "won"
    nextState.winningLine = win.winningLine;
    nextState.winner = win.winner;
  } else if(draw) { // Game drawn
    nextState.status = "draw";
  } else { // Continue playing
    nextState.currentPlayer = getNextPlayer(nextState.currentPlayer);
  }

  return nextState;
}