import { useContext, useEffect } from 'react';
import React from 'react'
import { useParams } from 'react-router-dom'
import { productsArray } from '../json/products';
import Navbar from '../components/Navbar'
import { CartContext } from '../context/CartContext';
import Product from './Product';
import Featured from './Featured';

const ProductDetail = () => {

  const cart = useContext(CartContext);
  const { id } = useParams();
  const product = productsArray.find((product) => product.id === id);
  if (!product) {
    return <div>Product not found</div>;
  }
  const productsToDisplay = productsArray.slice(0, 6); // display only first 10 products
  const productQuantity = cart.getProductQuantity(id);
  return (
    <>
      <Navbar />
      <section class="productDetailContainer">
        <div class="productDetail">
          <div class="productImage">
            <img src={product.image} alt="" />
          </div>
          <div class="productContent">
            <h1>{product.title}</h1>
            <h2> ₹ {product.price}</h2>
            <h5>*Inclusive of all taxes</h5>
            <p>{product.description}</p>
            {productQuantity > 0 ?
              <div class="quantity detailsButton">
                Qty : <button onClick={() => cart.addOneToCart(id)}   >+</button> <span>{productQuantity}</span>  <button onClick={() => cart.removeOneFromCart(id)}  >-</button>
              </div>
              :
              <button class="addCart detailAddd" onClick={() => cart.addOneToCart(id)}>Add to Cart</button>
            }
            <h3><span class="red" >{product.commonCategory}</span></h3>
          </div>

        </div>
      </section>
      <section class="productRules">
        <div class="aboutContainer">
          <h2>About</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consectetur voluptatem sequi recusandae accusantium veniam provident labore? Itaque aut eius voluptatum modi rerum. Pariatur, porro? Deserunt harum ipsa dolores neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, fuga dolorem, exercitationem quae inventore fugiat non aperiam corporis ratione cupiditate nostrum optio corrupti amet, nobis neque molestiae culpa consequatur repudiandae doloribus reprehenderit voluptate? Itaque saepe quod accusamus, tenetur dolorum quasi a soluta optio quisquam beatae illum veniam consectetur, autem asperiores. Lorem ipsum, dolor sit amet consec Itaque saepe quod accusamus, tenetur dolorum quasi a soluta optio quisquam beatae illum veniam consectetur,
          </p>
        </div>
        <div class="refundPolicyContainer">
          <h2>Return Policy</h2>
          <p>Thanks for purchasing our products (or subscribing to our services) at [website] operated by [name].
            We offer a full money-back guarantee for all purchases made on our website. If you are not satisfied with the product that you have purchased from us, you can get your money back no questions asked. You are eligible for a full reimbursement within 14 calendar days of your purchase.
            After the 14-day period you will no longer be eligible and won't be able to receive a refund. We encourage our customers to try the product (or service) in the first two weeks after their purchase to ensure it fits your needs.
            If you have any additional questions or would like to request a refund, feel free to contact us.
          </p>
        </div>
      </section>
      <section class="featuredProducts" >
        <h2>Featured Products</h2>
        <div className="ProductsCards SliderCards">
            <Featured/>
        </div>
      </section>
    </>
  )
}

export default ProductDetail