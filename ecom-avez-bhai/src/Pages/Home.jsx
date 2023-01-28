import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import LeftHome from '../components/LeftHome'
import MidHome from '../components/MidHome'
import RightHome from '../components/RightHome'
import Deals from '../components/Deals'
import Banner2 from '../components/Banner2'
import PopularProducts from '../components/PopularProducts'
import Banner3 from '../components/Banner3'
const Home = () => {
    return (
        <>
            <main>
                <Sidebar />
                <div class="homePage_avez">
                    <Navbar />
                    <div class="avez_component1Container">
                        <LeftHome />
                        <MidHome />
                        <RightHome />
                    </div>
                </div>
         
            </main>
            <section>
            <Deals/>
        </section>
        <Banner2/>
        <PopularProducts/>
        <Banner3/>
        </>
    )
}

export default Home