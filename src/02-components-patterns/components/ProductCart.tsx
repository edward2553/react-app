import styles from '../styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import { createContext } from 'react';
import { ProductCartProps, ProductContextProps } from '../interfaces';
import { ProductImage } from './ProductImage';

export const ProductContext = createContext({} as ProductContextProps );

export const {Provider} = ProductContext;

export const ProductCart = ({ children, product }: ProductCartProps) => {

  const {counter, increaseBy} = useProducts();

  return (
    <Provider value={{
      product,
      counter,
      increaseBy
    }}>
      <div className={styles.productCard}>
        { children }
        {/* <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  )
}

export { ProductImage };
