
export interface ProductContextProps {
  counter: number;
  product: Product;
  maxCount?: number;
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

export interface InitialValues {
  count?: number;
  maxCount?:  number;
}

export interface ProductCartHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}