import Product from './Product'

const ProductList = ({ products }) => {
  console.log( "products in ProductList", {products});
  return (
    <ul className='product-list'>
      {products.map(product => {
        return <Product 
        key={product._id}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        />
      })}
    </ul>
  )
}

export default ProductList;