import ProductCart, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces";
import '../styles/custom-styles.css'

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
        <ProductCart
          product={product}
          className="bg-dark text-white"
        >
          <ProductCart.Image className="custom-image" />
          <ProductCart.Title className='text-white text-bold' />
          <ProductCart.Buttons className='custom-buttons' />
        </ProductCart>
        <ProductCart
          product={product}
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}  />
          <ProductTitle className='text-white text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCart>
        <ProductCart
          product={product}
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'center' }} />
        </ProductCart>
      </div>
    </div>
  );
};
