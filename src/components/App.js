import React from 'react';
import ProductList from './ProductList';
import Product from './Product';

const App = () => {
  return (
    <div id='app'>
      <header>
        <h1>The Shope!</h1>
        <div class='cart'>
          <h2>Your Cart</h2>
          <p>Your Cart is Empty</p>
          <p>Total: $0</p>
          <button class='checkout' disabled>Checkout</button>
        </div>
      </header>
      <main>
        <div class='product-listing'>
          <h2>Products</h2>
          <ProductList />
        </div>
      </main>
    </div>
  )
}

export default App;