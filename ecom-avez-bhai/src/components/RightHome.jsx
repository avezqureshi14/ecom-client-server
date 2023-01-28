import React from 'react'
import watch from '../assets/watch.jpg'
import laptop from '../assets/laptop.jpg'
import { Link } from 'react-router-dom'
const RightHome = () => {
    return (
        <div>

            <div class="suggest_avez">
                <div class="suggest_container sha">
                    <h3>Suggested for you</h3>
                    <div class="sug1_avez">
                        <img src={watch} alt="" />
                    </div>
                    <div class="sug1_avez">
                        <img src={laptop} alt="" />
                    </div>
                <Link to='/electronics' >    <h4 class="cur">Shop Now <i class='bx bxs-right-arrow'></i> </h4></Link>
                </div>
            </div>

        </div>
    )
}

export default RightHome