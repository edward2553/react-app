import { useMemo } from "react";
import ProductCart, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => { 

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCart
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {
          ({
            reset,
            increaseBy,
            isMaxCountReached,
            count
          }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCart>
    </div>
  );
};
