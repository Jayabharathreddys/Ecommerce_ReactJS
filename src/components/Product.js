const Product = ({ product }) => (
  <div className="prodcut" key={product.id}>
    <img src={product.image} alt={product.title} className="image" />
    <div>
      <div className="title">{product.title}</div>
      <span>Rs {product.price}</span>
    </div>
  </div>
);

export default Product;
