import React, { useState } from 'react';
import './ProductPage.css';
import { Link } from "react-router-dom";
import {headphone} from '../../../Backend/product'
import ProductCard from './prodet';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faLaptop,faHeadphones,faCamera,faServer} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';





const Product= () => {

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    console.log(`Added ${product.color[0]} to cart`);
    setCartCount(prev => prev + 1);
    
  };
  const navigate = useNavigate();
  const handle=(path)=>{
    navigate(path);

  }

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
        <div className='self'>
           
              <span > 
                <FontAwesomeIcon icon={faLaptop} className='lap' onClick={()=>{handle("/shop/buy-computer")}} />
                <p>Computer and Laptops</p>
              </span>
              
              
          <span>
            <FontAwesomeIcon icon={faHeadphones} className='lap' onClick={()=>{handle("/shop/buy-headphone")}}/>
            <p>Headphones</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faCamera} className='lap'/>
            <p>Cameras</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faServer} className='lap'/> 
            <p>Networking Devices</p>
          </span>

          
          

        </div>
        

        
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