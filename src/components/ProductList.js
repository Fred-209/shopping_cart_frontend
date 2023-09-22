import Product from './Product'

const ProductList = ({ products, setProducts }) => {
  console.log("products in ProductList", { products });
  return (
    <ul className='product-list'>
      {products.map(product => {
        return <Product
          key={product._id}
          id={product._id}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          products={products}
          setProducts={setProducts}
        />
      })}
    </ul>
  )
}

export default ProductList;