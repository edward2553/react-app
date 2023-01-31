
export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export type shoppingCartState = { [key:string] : ProductInCart }