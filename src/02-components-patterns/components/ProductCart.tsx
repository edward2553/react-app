import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProducts } from '../hooks/useProducts';

interface Props {
    product: Product;

}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export const ProductCart = ({ product }: Props) => {

  const {counter, increaseBy} = useProducts();

  return (
    <div className={styles.productCard}>
        {/* <img className={styles.productImg} src= alt="Coffee mug" /> */}
        <img className={styles.productImg} src={product.img ? product.img : noImage} alt="Coffee mug" />

        <span className={styles.productDescription}>{product.title}</span>

        <div className={styles.buttonsContainer}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}> {counter} </div>
            <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>+</button>

        </div>

    </div>
  )
}
