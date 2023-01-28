import React from 'react'
import { productsArray } from '../json/products'
import Navbar from './Navbar'
import Product from './Product'
const ElectronicProducts = () => {
    const Electronic = productsArray.filter((curr) => {
        return (
            curr.mainCategory == "electronics"
        )
    })
  return (
    <>        
    <Navbar/>
    <div className="ProductsCards womanProducts  SliderCards">
        {Electronic.map((product) => (
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

export default ElectronicProducts