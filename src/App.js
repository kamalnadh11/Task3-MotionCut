
import React, { useState } from 'react';
import ProductPage from './ProductPage';
import ViewCartPage from './ViewCartPage';
import './App.css'; 

const App = () => {
  const [currentPage, setCurrentPage] = useState('product');
  const [cart, setCart] = useState([]);

  const switchPage = (page) => {
    setCurrentPage(page);
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Gadgets Store</h1>
      </header>

      <div className="button-container">
        <button onClick={() => switchPage('product')}>Product Page</button>
        <button onClick={() => switchPage('cart')}>View Cart</button>
      </div>

      {currentPage === 'product' ? (
        <ProductPage addToCart={addToCart} />
      ) : (
        <ViewCartPage cart={cart} setCart={setCart} />
      )}
    </div>
  );
};

export default App;
