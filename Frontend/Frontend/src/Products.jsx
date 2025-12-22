import React, { useState } from 'react';
import './ProductPage.css';
import {headphone} from './product'
import ProductCard from './prodet';

const Product= () => {

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    console.log(`Added ${product.title} to cart`);
    setCartCount(prev => prev + 1);
    
  };

  return (
    <div className="app-container">
      <header className="navbaar">
        <h1>TechStore</h1>
        <div className="cart-icon">
         <a href='/cart'>🛒 Cart ({cartCount})</a> 
        </div>
      </header>

      <main>
        <h2 className="section-title">Best Sellers</h2>
        
        {/* <div className="products-grid">
          {headphone.map((item) => (
            <ProductCard 
              key={item.id} 
              product={item} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div> */}
        {/* <div className="products-grid">
          {headphone.map((item) => (
            <ProductCard 
              key={item.id} 
              product={item} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div> */}
      </main>
    </div>
  );
}

export default Product;