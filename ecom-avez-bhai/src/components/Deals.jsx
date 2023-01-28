import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Products from './Products'
const Deals = () => {
  const [timeLeft, setTimeLeft] = useState(20 * 60 * 60 * 1000);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeLeft(0);
    }, timeLeft);
    return () => clearTimeout(timeout);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      resetTimer();
    }
  }, [timeLeft]);

  const resetTimer = () => {
    setTimeLeft(20 * 60 * 60 * 1000);
  }

  let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  let seconds = Math.floor((timeLeft / 1000) % 60);
  return (
    <>
    <div class="dealsComponent2Container">
    <div class="dealsTextContent">
    <div class="dealsText">
        <h2>Deals of the Day</h2> <h1>|</h1> <h3>Sale ends in 2 days !!!</h3>
    </div>
    <div class="dealsDetails">
       <Link to='/products' > <h4>View More Deals <i class='bx bxs-right-arrow'></i> </h4></Link> 
    </div>
</div>

<div class="dealsProductsSlider">
    <Products/>
    </div>
</div>
    </>
  )
}


export default Deals