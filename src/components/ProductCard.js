import "./ProductCard.css";

export const ProductCard = ({product}) => {
  return (
    <div className="productCard">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <div className="action">
        <p className="price">${product.price}</p>
        <button className="">Add to Cart</button>
      </div>
    </div>
  );
};
