import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cartSlice';
import Header from '../components/Header';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector(state => state.cart);

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  if (items.length === 0) {
    return (
      <div className="shopping-cart-page">
        <Header />
        <main className="main-content">
          <div className="container">
            <h1>Your Shopping Cart</h1>
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="shopping-cart-page">
      <Header />
      <main className="main-content">
        <div className="container">
          <h1>Your Shopping Cart</h1>
          
          <div className="cart-summary">
            <p className="total-items">Total Items: {totalItems}</p>
            <p className="total-cost">Total Cost: ${totalPrice.toFixed(2)}</p>
          </div>

          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">Unit Price: ${item.price}</p>
                </div>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => dispatch(decrementQuantity({ id: item.id }))}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => dispatch(incrementQuantity({ id: item.id }))}
                  >
                    +
                  </button>
                </div>
                <button 
                  className="delete-btn"
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCartPage;