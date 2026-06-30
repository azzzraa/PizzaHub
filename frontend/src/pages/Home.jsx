import { useEffect, useState } from "react";
import PizzaCard from "../components/PizzaCard";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cart from "../components/Cart";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.log(err));
  }, []);

 const addToCart = (pizza) => {
  const existingPizza = cart.find(
    (item) => item.id === pizza.id
  );

  if (existingPizza) {
    const updatedCart = cart.map((item) =>
      item.id === pizza.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
  } else {
    setCart([
      ...cart,
      {
        ...pizza,
        quantity: 1,
      },
    ]);
  }
};

const placeOrder = () => {
  console.log("Order placed!");
  console.log(cart);
};

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

  return (
    <div className="app">
      <Navbar cart={cart} />

      {token && (
        <div>
          <h3>You are logged in</h3>
          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

      <Hero />

      <section className="menu-section">
        <h2>Our Menu 🍕</h2>

       <Cart
  cart={cart}
  placeOrder={placeOrder}
  setCart={setCart}
/>

        <div className="pizza-grid">
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;