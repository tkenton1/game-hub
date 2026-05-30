import type { CellValue } from "./types";

export function posKey(row: number, col: number): string {
  return `${row},${col}`
}

export function computeConflicts(grid: CellValue[][]): Set<string> {
  const conflicts = new Set<string>();

  // --- Check row/col for duplicates ---
  for (let row = 0; row < 9; row++) {
    const positionsByDigit = new Map<number, number[]>();
    
    for (let col = 0; col < 9; col++) {
      const v = grid[row][col];
      if (v === null) continue; // don't treat nulls as duplicates
      
      // create array of positions if doesn't exist
      let positionsByDigitArr = positionsByDigit.get(v);
      if(positionsByDigitArr == undefined) positionsByDigitArr = [col]
      else positionsByDigitArr.push(col);
      
      positionsByDigit.set(v, positionsByDigitArr);
    }

    // Add co ordinates to conflicts for state
    for (const pos of positionsByDigit.values()) {
      if(pos.length > 1) {
        for(const col of pos) {
          conflicts.add(posKey(row, col));
        }
      }
    }
  }

  // --- Check subgrids for duplicates ---
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const positionsByDigit = new Map<number, number[]>();

      const startRow = boxRow * 3;
      const startCol = boxCol * 3;

      for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
          const v = grid[row][col];
          if (v === null) continue;

          let arr = positionsByDigit.get(v);
          if (arr === undefined) arr = [row * 9 + col];
          else arr.push(row * 9 + col);

          positionsByDigit.set(v, arr);
        }
      }

      for (const pos of positionsByDigit.values()) {
        if (pos.length > 1) {
          for (const encoded of pos) {
            const r = Math.floor(encoded / 9);
            const c = encoded % 9;
            conflicts.add(posKey(r, c));
          }
        }
      }
    }
  }
  return conflicts;
}

export function isSolved(grid: CellValue[][], conflicts: Set<string>): boolean {
  if(conflicts.size > 0) return false;

  for(let row = 0; row < grid.length; ++row) {
      for(let col = 0; col < grid.length; ++col) {
        if(grid[row][col] == null) return false;
      }
  }

  return true;
}