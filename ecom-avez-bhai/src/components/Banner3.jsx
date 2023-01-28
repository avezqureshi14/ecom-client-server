import React from 'react'
import Banner from '../assets/beaulty.jpg'
import { Link } from 'react-router-dom'
const Banner3 = () => {
  return (
    <section class="computerSection" >
    <div class="headTopComputers">
        <h1>Pink Clothing and Kits</h1>
        <div class="computerBanner sha">
            <img src={Banner} alt=""/>
        </div>
        <div class="categoryCards">
            <ul>
                <li>
                    <div class="categoryCard sha">
                     <Link to='/woman' > Women Clothing <i class='bx bx-chevrons-right'></i></Link>  
                    </div>
                </li>
                <li>
                    <div class="categoryCard sha">
                    <Link to='/woman' >  Lipsticks <i class='bx bx-chevrons-right'></i></Link> 
                    </div>
                </li>
                <li>
                    <div class="categoryCard sha">
                    <Link to='/woman' >  Perfumes <i class='bx bx-chevrons-right'></i></Link> 
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
  )
}

export default Banner3