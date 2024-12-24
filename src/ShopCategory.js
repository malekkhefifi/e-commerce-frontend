import React from 'react';
import { products } from './products'; // Import the products data
import { Link } from 'react-router-dom';
import product from './products'; // Correct path to the products file


const ShopCategory = ({ category }) => {
    // Filter products based on the category passed as a prop
    const filteredProducts = products.filter(product => product.category === category);
  
    return (
      <div>
        <h2>Category: {category}</h2>
        <div className="product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ShopCategory;
