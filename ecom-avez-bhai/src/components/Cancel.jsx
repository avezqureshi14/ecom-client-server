import React from 'react'
import { Link } from 'react-router-dom'
const Cancel = () => {
  return (
    <div className="cancelContainer">
    <div className="cancelContent">
    <h1 className='cancel' >Cancel</h1>
    <h4>Your transaction has been cancelled</h4>
    <Link to='/' className='moveNow' ><button>Move to Shop</button></Link>
     
    </div>
    </div>
  )
}

export default Cancel