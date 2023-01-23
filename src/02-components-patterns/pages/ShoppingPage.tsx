import React from "react";
import ProductCart, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces";

const product: Product = {
  id: "1",
  title: "Cofee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCart product={product}>
          <ProductCart.Image />
          <ProductCart.Title title="" />
          <ProductCart.Buttons />
        </ProductCart>
        <ProductCart product={product}>
          <ProductImage />
          <ProductTitle title="" />
          <ProductButtons />
        </ProductCart>
      </div>
    </div>
  );
};
