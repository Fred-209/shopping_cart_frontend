
import { useState } from 'react';
import { updateProduct } from '../services/products';
export const EditProductForm = ({ id, title, price, quantity, setShowEditForm, setProducts }) => {
  const [formInputs, setFormInputs] = useState({title, price, quantity});

  const handleInputChange = (event) => {
    const eventId = event.target.id;
    const eventValue = event.target.value;

    switch (eventId) {
      case 'product-name':
        setFormInputs({ ...formInputs, title: eventValue });
        break;
      case 'product-price':
        setFormInputs({ ...formInputs, price: eventValue });
        break;
      case 'product-quantity':
        setFormInputs({ ...formInputs, quantity: eventValue });
        break;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formInputs.title !== title || formInputs.price !== price || formInputs.quantity !== quantity) {
      const updatedProduct = await updateProduct(id, formInputs.title, formInputs.price, formInputs.quantity);
      setProducts(prevProducts => {
        const oldProductIndex = prevProducts.findIndex(product => product._id == updatedProduct._id);
        const newProducts = [...prevProducts];
        newProducts[oldProductIndex] = updatedProduct;
        return newProducts;
      });
      setShowEditForm(false);
    }
  };
  
  
  const handleCancel = (event) => {
    event.preventDefault();
    setShowEditForm(false);
  };
  
  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product</label>
          <input
            type="text"
            id="product-name"
            value={formInputs.title}
            aria-label="Product Name"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={formInputs.price}
            aria-label="Product Price"
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={formInputs.quantity}
            aria-label="Product Quantity"
            onChange={handleInputChange}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit" onClick={handleSubmit}>Update</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

