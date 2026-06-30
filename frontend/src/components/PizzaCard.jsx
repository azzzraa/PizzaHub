function PizzaCard({ pizza, addToCart }) {
  return (
    <div className="pizza-card">
      <img src={pizza.image} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>${pizza.price}</p>
      <button onClick={() => addToCart(pizza)}>
  Add To Cart
</button>
    </div>
  );
}

export default PizzaCard;