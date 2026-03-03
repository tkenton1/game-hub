import type { Cell } from "../logic/types";
import styles from "./Square.module.css";

type Props = {
  value: Cell;
  onClick: () => void;
  disabled?: boolean;
  highlight?: boolean;
};

export function Square(props: Props) {
  // TODO: render a button with the value
  // className can use props.highlight
  return(
    <button className={styles.cell + " " + (props.highlight ? styles.highlight : "")}
            disabled={props.disabled}
            onClick={props.onClick}>
              {props.value}
    </button>
  )
};