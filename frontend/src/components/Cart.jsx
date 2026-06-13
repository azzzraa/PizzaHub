function Cart({ cart }) {
  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.quantity,
    0
  );

  return (
    <section className="cart-section">
      <h2>Your Cart 🛒</h2>

      {cart.map((pizza, index) => (
        <div key={index}>
          <p>
            {pizza.name} x{pizza.quantity} - $
            {(pizza.price * pizza.quantity).toFixed(2)}
          </p>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
    </section>
  );
}

export default Cart;