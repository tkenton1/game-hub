export type Player = "X" | "O";
export type Cell = Player | null;

export type GameStatus = "playing" | "won" | "draw";

export type GameState = {
  cells: Cell[];          // length 9 for the board
  currentPlayer: Player;  // whose turn X / O
  status: GameStatus;
  winner: Player | null;
  winningLine: number[] | null; // indices like [0,1,2] (optional but nice)
};