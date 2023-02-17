import { createContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { InitialValues, Product, ProductCartHandlers, ProductContextProps, onChangeArgs } from '../interfaces';
import styles from '../styles/styles.module.css';
import { ProductImage } from './ProductImage';

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args : ProductCartHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps );

export const {Provider} = ProductContext;

export const ProductCart = ({ children, product, className, style, value, onChange, initialValues }: Props) => {

  const {
    counter,
    maxCount,
    isMaxCountReached,
    increaseBy,
    reset,
  } = useProducts({ onChange, product, value, initialValues });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount,
  }}>
      <div 
          className={ `${ styles.productCard } ${ className }` }
          style={ style }
      >
          { 
            children({
              count: counter,
              isMaxCountReached,
              product,
              maxCount: initialValues?.maxCount,
              increaseBy,
              reset,
            })
          }
      </div>
  </Provider>
  )
}

export { ProductImage };
