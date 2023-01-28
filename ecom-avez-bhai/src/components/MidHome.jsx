import React from 'react'
import img1 from '../assets/img00.jpg'
import electronic from '../assets/img1.png'
import health from '../assets/health.jpg'
import kids from '../assets/kids.jpg'
import { Link } from 'react-router-dom'
const MidHome = () => {
  return (
    <div>
    <div class="banner_avez">
    <div class="topBanner_avez sha">
        <img id="my-img" src={img1} alt=""/>
    </div>
    <div class="bottomBanner_avez">
        <div class="bottomBanner1 sha">
        <Link to='/products' >      <img src={electronic} alt=""/></Link>
        </div>
        <div class="bottomBanner2 sha">
        <Link to='/products' >      <img src={health} alt=""/></Link>
        </div>
        <div class="bottomBanner3 sha">
         <Link to='/kids' >   <img src={kids} alt=""/></Link>
        </div>
    </div>
</div>
    </div>
  )
}

export default MidHome