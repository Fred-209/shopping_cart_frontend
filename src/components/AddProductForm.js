import { useState } from 'react';
import { addProduct } from '../services/products';
const AddProductForm = () => {
  const [productNameInput, setProductNameInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [quantityInput, setQuantityInput] = useState('');

  const handleAddProduct = (event) => {
    event.preventDefault();
    addProduct(productNameInput, priceInput, quantityInput);
  }
  
  const handleInputChange = (event) => {
    const eventId = event.target.id;
    const eventValue = event.target.value;
  
    if (eventId === 'product-name') {
      setProductNameInput(eventValue);
    } else if (eventId === 'product-price') {
      setPriceInput(eventValue);

    } else if (eventId === 'product-quantity') {
      setQuantityInput(eventValue);
    }
  }

  return (
    <div className="add-form visible">  
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit" onClick={handleAddProduct}>Add</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>  
  );
}

export default AddProductForm;

