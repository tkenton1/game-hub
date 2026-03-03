import type { Cell, Player } from "./types";

export function calculateWinner(cells: Cell[]): {
  winner: Player | null;
  winningLine: number[] | null;
} {
    const winningLines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    
    for (const wl of winningLines) {
      if(cells[wl[0]] == "X" && cells[wl[1]] == "X" && cells[wl[2]] == "X") 
        return { winner: "X", winningLine: [wl[0], wl[1], wl[2]] };  
      else if(cells[wl[0]] == "O" && cells[wl[1]] == "O" && cells[wl[2]] == "O") 
        return { winner: "O", winningLine: [wl[0], wl[1], wl[2]] };  
    }
    ;
    return { winner: null, winningLine: null };
}

export function isDraw(cells: Cell[], winner: Player | null): boolean {
  if(winner != null) return false;

  for (const c of cells) {
    if(c == null) return false;
  };

  return true;
}