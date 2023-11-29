
import React from 'react';
import './ProductPage.css'; 

const ProductPage = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Pendrive', price: 11, image: './images/a1.jpg' },
    { id: 2, name: 'External Hard Drive', price: 99, image: './images/a2.jpg' },
    { id: 3, name: 'Smart Watch', price: 159, image: './images/a3.jpg' },
    { id: 4, name: 'Foldable Keyboard', price: 35, image: './images/a4.jpg' },
    { id: 5, name: 'Power Bank', price: 25, image: './images/a5.jpg' },
    { id: 6, name: 'Wireless Mouse', price: 15, image: './images/a6.jpg' },
    { id: 7, name: 'Wireless Speaker', price: 35, image: './images/a7.jpg' },
    { id: 8, name: 'Wireless Headset', price: 25, image: './images/a8.jpg' },
    { id: 9, name: 'Gaming Controller', price: 35, image: './images/a9.jpg' },
    { id: 10, name: 'VR Glasses', price: 45, image: './images/a10.jpg' },
  ];

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
