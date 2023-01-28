import React, { useState } from 'react';
import { productsArray } from '../json/products';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Product from './Product';
import { Link } from 'react-router-dom';
import Category from './Category';
const SearchBar = () => {

    const uniqueList = [...new Set(productsArray.map((curr) => { return curr.mainCategory; }),"All")];
    const [catList, setCatList] = useState(uniqueList);
    console.log(uniqueList)
    const cart = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(productsArray);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredResults = productsArray.filter((product) => {
            return (
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.price.toString().includes(searchTerm) ||
                product.description.toString().includes(searchTerm) ||
                product.mainCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.commonCategory.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        setSearchResults(filteredResults);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    const filterItem = (category) =>{
    if(category === "All"){
        setSearchResults(productsArray);
    }else{
        const updatedList = productsArray.filter((currEle)=>{
            return currEle.mainCategory === category;
        })
        setSearchResults(updatedList)
    }
}
    return (
        <>
            <div className="formNavbar">
                <Link to='/' >
                    <div class="logo cur">
                        <h1> Ecom </h1>
                        <h6> by Avez Qureshi </h6>
                    </div>
                </Link>
                <form className='formSearch' onSubmit={handleSubmit}>
                    <input
                        class='one'
                        type="text"
                        placeholder="Search by Products, Category , Specification..."
                        value={searchTerm}
                        onChange={handleSearch}
                        onKeyDown={handleKeyDown}
                    />
                    <button className='one cur' type="submit">Search</button>
                </form>
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
            </div>
            <Category catList={catList} filterItem={filterItem} />

            <div className="allproducts">
                {searchResults.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                        deal={product.deal}
                        mainCategory={product.mainCategory}
                        commonCategory={product.commonCategory}
                    />
                ))}
            </div>
        </>
    );
};

export default SearchBar;
