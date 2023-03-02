import "./CartCard.css";
export const CartCard = ({product}) => {
  console.log("product.image: " + product.image);
  return (
    <div className="cartCard">
      <img src={product.image} alt={product.name} />

      <span>{product.name}</span>
      <span>${product.price}</span>
      <button className="removeButton">Remove</button>
    </div>
  );
};
