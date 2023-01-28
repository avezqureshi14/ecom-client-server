import React from 'react'
import Banner from '../assets/banner2.jpg'
import { Link } from 'react-router-dom'
const Banner2 = () => {
  return (
    <>
    <section class="computerSection" >
    <div class="headTopComputers">
        <h1>Shop Computers and Accessories</h1>
        <div class="computerBanner sha">
            <img src={Banner} alt=""/>
        </div>
        <div class="categoryCards">
            <ul>
                <li>
                    <div class="categoryCard sha">
                     <Link  to="/electronics" >Laptops <i class='bx bx-chevrons-right'></i></Link>   
                    </div>
                </li>
                <li>
                    <div class="categoryCard sha">
                    <Link  to="/electronics" >Chargers <i class='bx bx-chevrons-right'></i></Link>    
                    </div>
                </li>
                <li>
                    <div class="categoryCard sha">
                    <Link  to="/electronics" >Keyboards <i class='bx bx-chevrons-right'></i></Link>    
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
    </>
  )
}

export default Banner2