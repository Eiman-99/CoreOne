export default function ProductCard({ product }) {
  return (
    <div className="card-container">
      <img src={product.thumbnail} alt={`${product.name}`} />
      <p className="product-name">{product.name}</p>
    </div>
  );
}
