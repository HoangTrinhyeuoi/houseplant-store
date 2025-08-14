import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
