
import { clearCart } from '../services/products';

const cartTotal = (items) => {
  const total =  items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
  return total;
};

export const Cart = ({items, setItems}) => {
  
  const handleCheckout = async (event) => {
    await clearCart();
    setItems([]);
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <p>Total: $0.00</p>
          <button className="checkout" disabled>
            Checkout
          </button>
        </div>
      ) : (
        <div>
          <table className="cart-items">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="total">
                  Total: ${cartTotal(items)}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="checkout-button">
            <button className="checkout" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};