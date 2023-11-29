
import React from 'react';
import './ViewCartPage.css'; 

const ViewCartPage = ({ cart, setCart }) => {
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="cart-container">
      <h2>View Cart</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li className="cart-item" key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Total Items: {cart.length}</p>
        <p>Total Amount: ${calculateTotalAmount()}</p>
      </div>
    </div>
  );
};

export default ViewCartPage;
