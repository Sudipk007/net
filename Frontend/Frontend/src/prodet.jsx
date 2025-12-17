import React from 'react';
import { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [color,setColor]= useState()
  let col;
  const play = (e)=>{
    col=e.target.className;
    
    if(product.image.length>1){
      
      if(col==='red'){
        e.target.parentNode.parentNode.parentNode.firstChild.firstChild.src=product.image[1]
      }
      

    }
   
    
  }
 
  
  
  return (
    <div className="product-card">
      <div className="image-container">
       
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.title}</h3>
        <p className="description">{product.description}</p>
        
        <div className='pcolor'>
        {product.color.map((a)=>{
          return(
          
            <span className={a} onClick={play}></span>
          )
        })}
        </div>
       
        
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

export default ProductCard;