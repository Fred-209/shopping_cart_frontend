import React from 'react';
import ReactDOM from 'react-dom';

const Product = ({ name, price, quantity }) => {
  return React.createElement('li', { class: 'product' },
    React.createElement('div', { class: 'product-details' },
      React.createElement('h3', null, name)),
      React.createElement('p', { class: 'price'}, price),
      React.createElement('p', { class: 'quantity'}, `${quantity} left in stock`),
      React.createElement('div', { class: "actions product-actions"},
        React.createElement('button', { class: 'add-to-cart'}, "Add to Cart"),
        React.createElement('button', { class: 'edit'}, "Edit")
      )
  );
}

const ProductList = () => {
  return React.createElement('ul', { class: 'product-list'},
    Product({name: 'Amazon Kindle E-reader', price: '$79.99', quantity: '5'}),
    Product({name: 'Apple 10.5-Inch iPad Pro', price: '$649.99', quantity: '2'}),
    Product({name: 'Yamaha Portable Keyboard', price: '$159.99', quantity: '0'})
  );
}

const App = () => {
  return React.createElement('div', {id: 'app'},
    React.createElement('header', null),
      React.createElement('h1', {}, "The Shop!"),
      React.createElement('div', { class: 'cart'},
        React.createElement('h2', null, 'Your Cart'),
        React.createElement('p', null, 'Your cart is empty'),
        React.createElement('p', null, 'Total: $0'),
        React.createElement('button', {class: 'checkout', disabled: true}, 'Checkout'),
      ),
    
    React.createElement('main', null,
      React.createElement('div', { class: 'product-listing'},
        React.createElement('h2', null, "Products"),
        ProductList(),
      )
    ),
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

/* 
javascript app.js
import React from 'react';

const App = () => {
  return <h1>Hello world! I am using React</h1>;
};

export default App;



Create an index.js file in the src folder with the following content:
javascript index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

*/

{/* 
div
  h2
  ul
    li product
      div
        h3
        p
        p
        div
          button
          button
        button
    /li


<div class="product-listing">
  <h2>Products</h2>
  <ul class="product-list">
    <li class="product">
      <div class="product-details">
        <h3>Amazon Kindle E-reader</h3>
        <p class="price">$79.99</p>
        <p class="quantity">5 left in stock</p>
        <div class="actions product-actions">
          <button class="add-to-cart">Add to Cart</button>
          <button class="edit">Edit</button>
        </div>
        <button class="delete-button"><span>X</span></button>
      </div>
    </li>
  
    <li class="product">
      <div class="product-details">
        <h3>Apple 10.5-Inch iPad Pro</h3>
        <p class="price">$649.99</p>
        <p class="quantity">2 left in stock</p>
        <div class="actions product-actions">
          <button class="add-to-cart">Add to Cart</button>
          <button class="edit">Edit</button>
        </div>
        <button class="delete-button"><span>X</span></button>
      </div>
    </li>
  
    <li class="product">
      <div class="product-details">
        <h3>Yamaha Portable Keyboard</h3>
        <p class="price">$155.99</p>
        <p class="quantity">0 left in stock</p>
        <div class="actions product-actions">
          <button class="add-to-cart" disabled>Add to Cart</button>
          <button class="edit">Edit</button>
        </div>
        <button class="delete-button"><span>X</span></button>
      </div>
    </li>
  </ul>
</div> 
*/}