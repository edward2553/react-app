import ProductCart, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/ueShoppingCart";
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart();

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
