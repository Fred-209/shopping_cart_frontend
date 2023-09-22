import React from 'react';
import { deleteProduct } from '../services/products';

const Product = ({ id, title, price, quantity, products, setProducts }) => {
  const handleDeleteProductClick = async (event) => {
    try {
      const response = await deleteProduct(id);
      if (response.status === 200) {
        console.log(`Product ID ${id} delete from database`);
        setProducts(products.filter(product => product._id !== id))
      } else {
        console.log("Something went horribly wrong with handleDeleteProductClick")
      }
    } catch (error) {
      console.log(error)
    }
  };
 
  return (
    <li className='product'>
      <div className="product-details">
        <h3>{ title }</h3>
        <p className='price'>{ price }</p>
        <p className='quantity'>{quantity} left in stock</p>
        <div className='actions product-actions'>
          <button className='add-to-cart'>Add to Cart</button>
          <button className='edit'>Edit</button>
        </div>
        <button className="delete-button" onClick={handleDeleteProductClick}><span>X</span></button>
      </div>
    </li>
  );
};

export default Product;