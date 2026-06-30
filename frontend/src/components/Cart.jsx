function Cart({ cart, placeOrder, setCart }) {
  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.quantity,
    0
  );

  const removePizza = (id) => {
    const updatedCart = cart.filter(
      (pizza) => pizza.id !== id
    );

    setCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, quantity: pizza.quantity + 1 }
        : pizza
    );

    setCart(updatedCart);
  };

  if (cart.length === 0) {
    return (
      <section className="cart-section">
        <h2>Your Cart 🛒</h2>
        <p>Your cart is empty 🍕</p>
      </section>
    );
  }

  return (
    <section className="cart-section">
      <h2>Your Cart 🛒</h2>

      {cart.map((pizza) => (
        <div key={pizza.id}>
          <p>{pizza.name}</p>

          <button>-</button>

          <span>{pizza.quantity}</span>

          <button onClick={() => increaseQuantity(pizza.id)}>
            +
          </button>

          <p>
            ${(
              pizza.price * pizza.quantity
            ).toFixed(2)}
          </p>

          <button onClick={() => removePizza(pizza.id)}>
            ❌
          </button>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>

      <button onClick={placeOrder}>
        Place Order
      </button>
    </section>
  );
}

export default Cart;