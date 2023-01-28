import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
const Product = ({
  id,
  title,
  description,
  image,
  price,
  deal,
  mainCategory,
  commonCategory
}) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);
  return (
    <>
      <div class="ProductCard sha">
        <div class="ProductImage">
          <img src={image} alt="" />
        </div>
        <div class="ProductContent">
          <Link to={`/product/${id}`}>
            <h1 class="tdesc" >{title}</h1>
          </Link>
          <p class="desc" >{description}</p>
          <h3 class="desc" > ₹ {price}</h3>
        </div>
        <div class="productBtns">
        <Link to={`/product/${id}`}> <button class="viewMore">View More</button></Link> 
          {productQuantity > 0 ?
            <div class="quantity">
              Qty : <button onClick={() => cart.addOneToCart(id)}  >+</button> <span>{productQuantity}</span>  <button onClick={() => cart.removeOneFromCart(id)}  >-</button>
            </div>
            :
            <button class="addCart" onClick={() => cart.addOneToCart(id)}>Add to Cart</button>
          }
        </div>
      </div>
    </>
  )
}

export default Product