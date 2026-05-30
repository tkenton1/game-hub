import type { CellValue, Position } from "../logic/types";
import styles from "./Cell.module.css";

type Props = {
  value: CellValue;
  pos: Position;
  isConflicting: boolean;
  onChange: (rawText: string) => void;
};

export function Cell(props: Props) {

  return (
    <input
      className={`${styles.cell} ${props.isConflicting ? styles.conflict : ""}`} value={props.value?.toString() ?? ""}
      onChange={(e) => props.onChange(e.target.value)}
      maxLength={1}
      inputMode="numeric"
      aria-label={`Row ${props.pos.row + 1} Column ${props.pos.col + 1}`}
    />
  );
}