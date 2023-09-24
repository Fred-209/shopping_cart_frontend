import React, { useEffect, useState } from 'react';
import { ProductList } from './ProductList';
import { AddProductForm } from './AddProductForm';
import { getProducts, getCartItems } from '../services/products';
import { Cart } from './Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      setProducts(productList);
    };

    const fetchCartitems = async () => {
      const cartItems = await getCartItems();
      setCartItems(cartItems);
    }

    fetchProducts();
    fetchCartitems();
  }, []);

  const handleAddProductClick = () => setShowProductForm(true);

  return (
    <div id='app'>
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} setItems={setCartItems}/>
      </header>
      <main>
        <div className='product-listing'>
          <h2>Products</h2>
          <ProductList products={products} setProducts={setProducts} setCartItems={setCartItems}/>
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