/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const [menu_visible, menu_visible_change] = useState(true);
  const [admin, isAdmin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/user/register' || location.pathname === '/user/login') {
      menu_visible_change(false);
    } else {
      let user_role = localStorage.getItem('role') != null ? localStorage.getItem('role').toString() : '';
      if (user_role === 'admin') {
        isAdmin(true);
      } else {
        isAdmin(false);
      }
      menu_visible_change(true);
    }
  }, [location, navigate]);

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };
  const logout = () => {
    localStorage.remove();
    toast.success('User Logged In Successfully');
    navigate('/');

  };
  return (
    <div>{menu_visible &&
      <header>
        <h3>JEEDIEx</h3>
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          {admin &&
            <Link to="/admin/create-news">Add News</Link>
          }
          <Link to="/contact">Contact</Link>
          <Link to="/about" class="active">About</Link>
          <a type="button" onClick={() => logout()} class="active">Logout</a>
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
