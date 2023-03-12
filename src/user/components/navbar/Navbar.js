import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="news">News</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
        <li>
          <a class="active" href="about">
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
