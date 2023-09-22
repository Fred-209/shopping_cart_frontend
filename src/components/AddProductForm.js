import { useState } from 'react';
import { addProduct } from '../services/products';

export const AddProductForm = ({ products, setProducts }) => {
  const [formInputs, setFormInputs] = useState({
    name: '',
    price: '',
    quantity: '',
  });
 
  const handleAddProduct = async (event) => {

    const resetForm = () => {
      setFormInputs({name: '', price: '', quantity: ''});
    }

    event.preventDefault();
    const newProduct = await addProduct(formInputs.name, formInputs.price, formInputs.quantity);
    if (newProduct) {
      console.log(event)
      setProducts(products.concat(newProduct));
      resetForm();
    } else {
      console.log("something went horribly wrong with handleAddProduct");
    }
  }

  const handleInputChange = (event) => {
    const eventId = event.target.id;
    const eventValue = event.target.value;

    if (eventId === 'product-name') {
      setFormInputs({ ...formInputs, name: eventValue });
    } else if (eventId === 'product-price') {
      setFormInputs({ ...formInputs, price: eventValue });

    } else if (eventId === 'product-quantity') {
      setFormInputs({ ...formInputs, quantity: eventValue });
    }
  }

  return (
    <div className="add-form visible">
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            value={formInputs.name}
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
            value={formInputs.price}
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
            value={formInputs.quantity}
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


