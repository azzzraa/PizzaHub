function Navbar({cart}) {
  return (
    <nav className="navbar">
      <h2>PizzaHub 🍕</h2>

      <ul>
        <li>Menu</li>
        <li>Cart({cart.length})</li>
      </ul>
    </nav>
  );
}

export default Navbar;