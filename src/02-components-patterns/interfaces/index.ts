
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
