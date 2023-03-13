import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <h3>LOGO</h3>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about" class="active">About</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
