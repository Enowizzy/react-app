/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const [menu_visible, menu_visible_change] = useState(true);
  const [admin, isAdmin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let user_role = localStorage.getItem('email');
    if (location.pathname === '/user/register' || location.pathname === '/user/login') {
      menu_visible_change(false)
    }
    if (user_role === 'admin@jeedie.co.tz') {
      isAdmin(true);
    }
  }, [location, navigate]);

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };
  return (
    <div>{menu_visible &&
      <header>
        <h3>JEEDIEx</h3>
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          {isAdmin &&
            <Link to="/admin/create-news">Add News</Link>
          }
          <Link to="/contact">Contact</Link>
          <Link to="/about" class="active">About</Link>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    }
    </div>
  );
};

export default Navbar;
