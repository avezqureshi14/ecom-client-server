import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
const Navbar = () => {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        
        <>
            <div class="homePage_avez">
                <header>
                <Link to='/' >
                    <div class="logo cur">
                        <h1> Ecom </h1>
                        <h6> by Avez Qureshi </h6>
                    </div>
                </Link>
                    <div class="search_avez ">
                   <Link to='/products' > <input
                      class="one clickProp"
                      type="text"
                      placeholder="Search by Products, Category , Specification..."
                    /></Link>
                    </div>
                    <Link to='/login' >
                    <div class="profile_avez cur one">
                        <div class="profile_image">
                        <i class='bx bx-user'></i>  
                        </div>
                        <div class="profile_name">
                          Hello !
                        </div>
                        </div>
                        </Link>
                <Link to='/cart' >

                    <div class="cart_avez cur">
                        <i class='bx bxs-cart'></i><span>{productsCount} </span>
                    </div>
                </Link>
                    </header>
            </div>
        </>
    )
}

export default Navbar