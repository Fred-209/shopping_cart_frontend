import React, { useEffect, useState } from 'react';
import { ProductList } from './ProductList';
import { AddProductForm } from './AddProductForm';
import { getProducts } from '../services/products';

const App = () => {
  const [products, setProducts] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  const handleAddProductClick = () => setShowProductForm(true);

  return (
    <div id='app'>
      <header>
        <h1>The Shop!</h1>
        <div className='cart'>
          <h2>Your Cart</h2>
          <p>Your Cart is Empty</p>
          <p>Total: $0</p>
          <button className='checkout' disabled>Checkout</button>
        </div>
      </header>
      <main>
        <div className='product-listing'>
          <h2>Products</h2>
          <ProductList products={products} setProducts={setProducts} />
        </div>
        {showProductForm ? (
          <AddProductForm setProducts={setProducts} setShowForm={setShowProductForm} />
        ) : (
          <p>
            <button className="add-product-button" onClick={handleAddProductClick}>Add A Product</button>
          </p>
        )}

      </main>
    </div>
  )
}

export default App;