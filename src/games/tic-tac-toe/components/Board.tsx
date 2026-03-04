import type { Cell } from "../logic/types";
import { Square } from "./Square";
import styles from "./Board.module.css";

type Props = {
  cells: Cell[];
  onCellClick: (index: number) => void;
  disabled?: boolean;
  winningLine?: number[] | null;
};

export function Board(props: Props) {
  return(
    <div className={styles.board}>
      {props.cells.map((c, i) => (
        <Square
          key={i}
          value={c}
          disabled={props.disabled}
          highlight={props.winningLine?.includes(i) ?? false}
          onClick={() => props.onCellClick(i)}
        />
      ))}
    </div>
  );
}