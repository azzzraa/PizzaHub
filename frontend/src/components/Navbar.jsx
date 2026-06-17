import { Link } from "react-router-dom";


const token = localStorage.getItem("token");

function Navbar({ cart }) {
  return (
    <nav className="navbar">
      <h2>PizzaHub 🍕</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/">Menu</Link>
        </li>

        <li>
          <Link to="/">Cart ({cart.length})</Link>
        </li>

        {token ? (
  <li>Logout</li>
) : (
  <li>
    <Link to="/login">Login</Link>
  </li>
)}
      </ul>
    </nav>
  );
}

export default Navbar;