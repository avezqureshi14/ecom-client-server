import React from 'react'
import { productsArray } from '../json/products'
import Navbar from './Navbar'
import Product from './Product'
const WomenProducts = () => {
    const WomenProducts = productsArray.filter((curr) => {
        return (
            curr.mainCategory == "woman"
        )
    })
    return (
        <>        
        <Navbar/>
        <div className="ProductsCards womanProducts  SliderCards">
            {WomenProducts.map((product) => (
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

export default WomenProducts