import styles from '../styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import { ReactElement, createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces';
import { ProductImage } from './ProductImage';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps );

export const {Provider} = ProductContext;

export const ProductCart = ({ children, product, className, style }: Props) => {

  const {counter, increaseBy} = useProducts();

  return (
    <Provider value={{
      product,
      counter,
      increaseBy
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={ style }
      >
        { children }
        {/* <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  )
}

export { ProductImage };
