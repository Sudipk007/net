import React from 'react';
import './ProductPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompPro = ({product,onAddToCart}) => {
  const navigate = useNavigate();
 

  const handlevent= (path)=>{
    navigate(`/${path}`);
  }
  return (
   
    <div className="product-card">
        
      <div className="image-container" >
       
       <img src={product.image} alt={product.title} /> 
      </div>
       <div className="product-info">
        <span className="category">{product.category}</span>
        <a onClick={()=>{handlevent(product.title)}}><h3>{product.title}</h3></a>
        <p className="description">{product.description}</p>
        
        
        
        
        <div className="card-footer">
          <span className="price">${product.price}</span>
          <button 
            className="add-btn"
            onClick={() => onAddToCart(product)}
            
          >
            Add to Cart
          </button>
        </div> 
      </div> 
    </div>
  );
};

export default CompPro;