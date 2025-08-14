import React from 'react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import { plants } from '../data/plants';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div className="product-listing-page">
      <Header />
      <main className="main-content">
        <div className="container">
          <h1>Our Plant Collection</h1>
          
          {categories.map(category => (
            <section key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="plants-grid">
                {plants
                  .filter(plant => plant.category === category)
                  .map(plant => (
                    <PlantCard key={plant.id} plant={plant} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListingPage;