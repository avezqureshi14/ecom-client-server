import React from 'react'
import { Link } from 'react-router-dom'
const Success = () => {
  return (
    <div className="cancelContainer">
    <div className="cancelContent">
    <h1 className='success' >Success</h1>
    <h4>Your Transaction has been Successful</h4>
    <Link to='/' className='moveNow' ><button>Purchase More</button></Link>
     
    </div>
    </div>
  )
}

export default Success