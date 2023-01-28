import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Cart from './Cart'
const CartProducts = () => {
  const checkout = async () => {
        await fetch('http://localhost:5000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    
    <>
      <Navbar />
      <div class="table_avez ">

        <table class="sha" >
          <tr>
            <th>Product Name</th>
            <th class="tbord" >Quantity</th>
            <th>Total</th>
          </tr> 
          {productsCount > 0
            ? cart.items.map( (currentProduct, idx) => (
                <Cart  key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
              ))
            : <h1>There are no items in your cart!  </h1>
          }
          <tr class="allcost" >
            <th>All total</th>
            <th class="thNone" >All total</th>
            <th>₹ {cart.getTotalCost().toFixed(2)}</th>
          </tr>

        </table>
        {productsCount > 0
          ?
        <div class="checkoutbtns">
          <button onClick={checkout}  >Proceed to Checkout</button>
        </div>
        :
        <div class="checkoutbtns">
        <Link to='/products' ><button>Move to Shop</button></Link>  
        </div>
        }
      </div>
    </>
  )
}

export default CartProducts