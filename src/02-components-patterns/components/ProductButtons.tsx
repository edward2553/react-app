import { useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCart";

export const ProductButtons = () => {

    const { counter, increaseBy } = useContext(ProductContext);
  
    return (
      <div className={styles.buttonsContainer}>
        <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
        <div className={styles.countLabel}> {counter} </div>
        <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>+</button>
      </div>
    );
  };