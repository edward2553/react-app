import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProducts = ({ onChange, product, value = 0, initialValues } : useProductsArgs) => {
  const [counter, setCounter] = useState<number>( initialValues?.count || value );
  const isControlled = useRef(!!onChange);
  const isMounted = useRef(false);

  const reset = () => {
    setCounter(initialValues?.count || value)
  };

  const increaseBy = (value: number) => {
    
    if (isControlled.current) {
      return onChange!({count: value, product});
    }

    let newValue = Math.max(counter + value, 0)

    // if (initialValues?.maxCount && newValue > initialValues?.maxCount) {
    //   return;
    // }

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({
      count: newValue,
      product,
    });
  };

  
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    
    increaseBy,
    reset,
  };
};
