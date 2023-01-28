import React from 'react'
import { useNavigate } from 'react-router-dom';
import { productsArray } from '../json/products';

const Sidebar = ({ handleCategoryClick }) => {
    const history = useNavigate();

    const handleCategorySelection = (category) => {
        handleCategoryClick(category);
        console.log(category)
        alert("Working")
        history('/products');
    }
    const categoryIcons = {
        'man': require('../assets/sidebar/man.png'),
        'woman': require('../assets/sidebar/woman.png'),
        'kids': require('../assets/sidebar/kid.png'),
        'Shoes': require('../assets/sidebar/shoes.png'),
        'electronics': require('../assets/sidebar/tv.png'),
        'home': require('../assets/sidebar/sofa.png'),
        'game': require('../assets/sidebar/game.png'),
        'books': require('../assets/sidebar/books.png'),
    }

    return (
        <>
            <div className="sideBar_avez sha">
                <div className="side_logo">
                    <h1>A</h1>
                </div>
                {Array.from(new Set(productsArray.map(product => product.mainCategory))).map((category) => (
                    <div className="side_logo icon" onClick={() => handleCategoryClick(category)} >
                        <img src={categoryIcons[category]} alt={category} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Sidebar
