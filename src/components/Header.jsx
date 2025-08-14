import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/products" className="logo">
          <h2>PlantShop</h2>
        </Link>
        
        <nav className="nav">
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalItems}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;