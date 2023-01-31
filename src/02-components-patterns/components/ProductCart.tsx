import styles from '../styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import { ReactElement, createContext } from 'react';
import { Product, ProductContextProps, onChangeArgs } from '../interfaces';
import { ProductImage } from './ProductImage';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps );

export const {Provider} = ProductContext;

export const ProductCart = ({ children, product, className, style, value, onChange }: Props) => {

  const {counter, increaseBy} = useProducts({ onChange, product, value });

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
