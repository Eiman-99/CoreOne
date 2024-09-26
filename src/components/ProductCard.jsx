export default function ProductCard({ product }) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={product.thumbnail} alt={`${product.name}`} />
      </div>
      <p className="product-name">{product.name}</p>
    </div>
  );
}
