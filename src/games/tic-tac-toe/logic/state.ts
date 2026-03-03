import type { GameState, Player } from "./types";

export function createInitialState(): GameState {
  return {
    cells: new Array(9).fill(null),
    currentPlayer: "X",
    status: "playing",
    winner: null,
    winningLine: null,
  };
}

export function getNextPlayer(current: Player): Player {
  return(current == "X" ? "O" : "X");
}

export function getStatusText(state: GameState): string {
  if(state.status == "won") return "Player " + state.currentPlayer + " won!";
  else if(state.status == "draw") return "It a draw!";
  else if(state.currentPlayer == "X") return "X to move.";
  else return "O to move.";
}