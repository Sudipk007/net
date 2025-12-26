import './ProductPage.css';
import ProductCard from './prodet';
import { useState } from 'react';
import {headphone} from '../../../Backend/product'

const Productcat= () => {
    const [cartCount, setCartCount] = useState(0);
    const handleAddToCart = (product,color) => {
        console.log(`Added ${product.title} to cart`);
        
        setCartCount(prev => prev + 1);
        
      };

    return(
    <>
        <div className="app-container">
            <header className="navbaar">
                <h1>TechStore</h1>
                <div className="cart-icon">
                    <a href='/cart'>🛒 Cart({cartCount}) </a> 
                </div>
            </header>
            <main>
                <h2 className="section-title">Best Sellers</h2>
                <div className="products-grid">
                    {headphone.map((item) => (
                        <ProductCard 
                        key={item.id} 
                        product={item} 
                        onAddToCart={handleAddToCart} 
                        />
                    ))}
                </div> 
            </main>
        
        </div>
    </>
    );
    
   
    

}

export default Productcat;