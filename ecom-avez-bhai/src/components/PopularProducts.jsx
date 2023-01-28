import React from 'react'
import { productsArray } from '../json/products';
import Product from './Product';
const PopularProducts = () => {
    const productsToDisplay = productsArray.slice(10, 16); // display only first 10 products
  return (
    <>
    <section class="featuredProducts" >
    <h2>Popular Products</h2>
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
</section>
    </>
  )
}

export default PopularProducts