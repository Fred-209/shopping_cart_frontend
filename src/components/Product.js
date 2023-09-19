import React from 'react';

const Product = ({ name, price, quantity }) => {
  return (
    <li class='product'>
      <div class="product-details">
        <h3>{ name }</h3>
        <p class='price'>{ price }</p>
        <p class='quantity'>{quantity} left in stock</p>
        <div class='actions product-actions'>
          <button class='add-to-cart'>Add to Cart</button>
          <button class='edit'>Edit</button>
        </div>
      </div>
    </li>
  );
};

export default Product;