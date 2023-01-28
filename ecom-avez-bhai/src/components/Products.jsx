import React from 'react'
import { productsArray } from '../json/products'
import Product from './Product'

const Products = () => {
  const productsToDisplay = productsArray.slice(19, 25); // display only first 10 products
  return (
    <>
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
    </>
  );
};


export default Products
