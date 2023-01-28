import React from 'react'
import Product from './Product'
import { productsArray } from '../json/products';
const Featured = () => {
  const productsToDisplay = productsArray.slice(0, 6).sort(() => Math.random() - 0.5);
  return (
    <div>
      <div className="ProductsCards SliderCards">
        {productsToDisplay.map((product) => (
          <li key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          </li>
        ))}
      </div>
    </div>
  )
}

export default Featured
