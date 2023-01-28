import { useContext } from "react";
import { ProductContext } from "./ProductCart";
import styles from '../styles/styles.module.css';

interface Props {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title = '', className, style } : Props) => {

    const { product } = useContext(ProductContext);
    let titleToShow: string;
  
    if ( title ) {
      titleToShow = title;
    } else {
      titleToShow = product.title
    }
  
    return (
      <span style={style} className={`${styles.productDescription} ${className}`}>{titleToShow}</span>
    )
  };