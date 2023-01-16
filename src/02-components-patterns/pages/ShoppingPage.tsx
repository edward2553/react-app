import React from 'react'
import { Product, ProductCart } from '../components/ProductCart';

const product : Product = {
    id: '1',
    title: 'Cofee Mug - Card',
    img: './coffee-mug.png',
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            <ProductCart product={product} />
        </div>
    </div>
  )
}
