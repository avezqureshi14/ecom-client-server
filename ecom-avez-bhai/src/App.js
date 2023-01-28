import './App.css';
import Home from './Pages/Home';
import SearchBar from './components/Searchbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';
import CartProducts from './components/CartProducts';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import WomenProducts from './components/WomenProducts';
import ElectronicProducts from './components/ElectronicProducts';
import Kids from './components/Kids';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ScrollButton from './components/Scroll';
import Success from './components/Success';
import Cancel from './components/Cancel';
import PageNotFound from './components/PageNotFound';
import Responsive from './components/Responsive';

function App() {

  return (
    <>
    <Responsive/>
    <div className='app' >
      <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/products' element={<SearchBar />} ></Route>
            <Route path='/woman' element={<WomenProducts />} ></Route>
            <Route path='/cart' element={<CartProducts />} ></Route>
            <Route path='/kids' element={<Kids />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='/electronics' element={<ElectronicProducts />} ></Route>
            <Route path='/success' element={<Success />} ></Route>
            <Route path='/cancel' element={<Cancel />} ></Route>
            <Route path='/product/:id' element={<ProductDetail />} ></Route>
            <Route path='*' element={<PageNotFound />} ></Route>
          </Routes>
        <Footer/>
      </CartProvider>
      </div>
    </>
  );
}

export default App;
