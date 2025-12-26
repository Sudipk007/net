import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  
  let color;

  const navigate = useNavigate();

  const handlevent= (path)=>{
    navigate(`/${path}`);
  }
  let col;

  const play = (e)=>{
    col =(e.target.className)
    color=col; 
    console.log(color)
    
    if(product.image.length>=1){
      
      if(col===product.color[0]){
        
    

        e.target.parentNode.parentNode.parentNode.firstChild.firstChild.src=product.image[0]
      }
      if(col===product.color[1]){
        e.target.parentNode.parentNode.parentNode.firstChild.firstChild.src=product.image[1]
      }

      if(col===product.color[2]){
        e.target.parentNode.parentNode.parentNode.firstChild.firstChild.src=product.image[2]
      }

      if(col===product.color[3]){
        e.target.parentNode.parentNode.parentNode.firstChild.firstChild.src=product.image[3]
      }

      if(col===product.color[4]){
        e.target.parentNode.parentNode.parentNode.firstChild.firstChild.src=product.image[4]
      }
      

    }
   
    
  }
 
  
  
  return (
    <div className="product-card" >
       <div className="image-container" >
       
        <img src={product.image[0]} alt={product.title} /> 
      </div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <a onClick={()=>{handlevent(product.title)}}><h3>{product.title}</h3></a>
        <p className="description">{product.description}</p>
        
        <div className='pcolor'>
        {product.color.map((cl)=>{
          
          return(
            
          <span className={cl} onClick={play}></span>
          )
        })}
        </div>
       
        
        <div className="card-footer">
          <span className="price">${product.price}</span>
          <button 
            className="add-btn"
            onClick={() => onAddToCart(product,color)}
            
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;