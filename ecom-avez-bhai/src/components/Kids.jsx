import React from 'react'
import { productsArray } from '../json/products'
import Navbar from './Navbar'
import Product from './Product'
const Kids = () => {
    const Kids = productsArray.filter((curr) => {
        return (
            curr.mainCategory == "kids"
        )
    })
  return (
    <>
    <Navbar/>
    <div className="ProductsCards womanProducts  SliderCards">
        {Kids.map((product) => (
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
  )
}

export default Kids