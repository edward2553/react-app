import { useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCart";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, maxCount, increaseBy } = useContext(ProductContext);

  const isMaxReached = useCallback(() => counter === maxCount, [counter, maxCount]);

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        onClick={() => increaseBy(+1)}
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disabled : ""
        }`}
      >
        +
      </button>
    </div>
  );
};
