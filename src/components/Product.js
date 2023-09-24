import React from 'react';
import { deleteProduct } from '../services/products';
import { EditProductForm } from './EditProductForm';
import { useState } from 'react';

const Product = ({ id, title, price, quantity, setProducts }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = async (event) => {
    event.preventDefault();
    setShowEditForm(true);
  }
  const handleDeleteClick = async (event) => {
    try {
      const response = await deleteProduct(id);
      if (response.status === 200) {
        console.log(`Product ID ${id} delete from database`);
        setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
      } else {
        console.log("Something went horribly wrong with handleDeleteClick")
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <li className='product'>
      <div className="product-details">
        <h3>{title}</h3>
        <p className='price'>{price}</p>
        <p className='quantity'>{quantity} left in stock</p>
        <div className='actions product-actions'>
          <button className='add-to-cart'>Add to Cart</button>
          <button className='edit' onClick={handleEditClick}>Edit</button>
        </div>
        <button className="delete-button" onClick={handleDeleteClick}><span>X</span></button>
      </div>
      {showEditForm ? <EditProductForm id={id} title={title} price={price} quantity={quantity} setShowEditForm={setShowEditForm} setProducts={setProducts} /> : null}
    </li>
  );
};

export default Product;