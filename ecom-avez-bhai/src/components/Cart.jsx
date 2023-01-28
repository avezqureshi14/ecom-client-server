import React from 'react'
import { useContext } from "react";
import { getProductData } from '../json/products';
import { CartContext } from '../context/CartContext';
const Cart = (props) => {
  
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
  return (
    <>
    <tr>
    <td>{productData.title}</td>
    <td class="tbord"> {quantity}  <button class="viewMore remove"  onClick={() => cart.deleteFromCart(id)} >Remove</button></td>
    <td>₹ { (quantity * productData.price).toFixed(2) }</td>
  </tr>
    </>
  )
}

export default Cart