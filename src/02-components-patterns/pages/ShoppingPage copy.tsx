import { useState } from "react";
import ProductCart, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product, onChangeArgs } from "../interfaces";
import '../styles/custom-styles.css';
import { products } from "../data/products";

interface ProductInCart extends Product {
  count: number;
}

type shoppingCartState = { [key:string] : ProductInCart }

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<shoppingCartState>({});

  const onProductCountChange = ({count, product}: onChangeArgs) => {
    console.log({count})
    setShoppingCart(oldShoppingCart => {

      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

      if(Math.max(productInCart.count + count, 0)) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        }
      }

      // Borrar el producto

      const {[product.id]: toDelete, ...rest} = oldShoppingCart;
      return rest;

      // if (!count) {

      //   const {[product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return rest

      //   // const newShopingCart = Object.values(shoppingCart).filter(p => p.id !== product.id)
      //   // const newShopingCartObj : shoppingCartState = {};
      //   // newShopingCart.forEach((p, idx) => {
      //   //   newShopingCartObj[idx] = p;
      //   // });
      //   // return newShopingCartObj;
        
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: {...product, count}
      // };
    })
    
  };

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
        {products.map( product => (
          <ProductCart
            key={product.id}
            product={product}
            className="bg-dark text-white"
            value={shoppingCart[product.id]?.count || 0}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}  />
            <ProductTitle className='text-white text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCart>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.values(shoppingCart).map(p => (
          <ProductCart
            key={p.id}
            product={p}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            value={p.count}
            onChange={(e) => onProductCountChange(e)}
          >
            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}  />
            <ProductTitle title={`${p.count}`} />
            <ProductButtons
              className='custom-buttons'
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            />
          </ProductCart>
        ))}
      </div>
      <div style={{marginTop: 30}}>
        <code>
          {JSON.stringify(shoppingCart, null, 5)}
        </code>
      </div>
    </div>
  );
};
