import Product from './Product'

export const ProductList = ({ products, setProducts, setCartItems }) => {
  return (
    <ul className='product-list'>
      {products.map(product => {
        return <Product
          key={product._id}
          id={product._id}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          setProducts={setProducts}
          setCartItems={setCartItems}
        />
      })}
    </ul>
  )
}
