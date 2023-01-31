import { useState } from "react";
import { ProductInCart, onChangeArgs, shoppingCartState } from "../interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<shoppingCartState>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    console.log({ count });
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0)) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      // Borrar el producto

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
