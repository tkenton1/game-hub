import type { CellValue, Position } from "../logic/types";
import { Cell } from "./Cell";
import styles from "./Grid.module.css";

type Props = {
  grid: CellValue[][];
  conflicts: Set<string>
  onCellChange: (pos: Position, rawText: string) => void;
};

export function Grid(props: Props) {
  return (
    <div className={styles.grid}>
      {props.grid.map((rowVals, row) =>
        rowVals.map((value, col) => {
          const pos = { row, col };

          let isConflicting = false;
          if(props.conflicts.has(row.toString() + "," + col.toString())) isConflicting = true;
          return (
            <div key={`${row}-${col}`} className={styles.cellWrap}>
              <Cell
                pos={pos}
                value={value}
                isConflicting={isConflicting}
                onChange={(text) => props.onCellChange(pos, text)}
              />
            </div>
          );
        })
      )}
    </div>
  );
}