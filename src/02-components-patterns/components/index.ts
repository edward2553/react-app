import { ProductButtons } from "./ProductButtons";
import { ProductCart as ProductCartHOC, ProductImage } from "./ProductCart";
import { ProductTitle } from "./ProductTitle";

export * from "./ProductButtons";
export * from "./ProductImage";
export * from "./ProductTitle";

const ProductCart = Object.assign(ProductCartHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
});

export default ProductCart;