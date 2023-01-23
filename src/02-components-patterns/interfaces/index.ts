import { ReactElement } from "react";

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCartProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}
