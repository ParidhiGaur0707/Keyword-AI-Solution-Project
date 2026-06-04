import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/digital-marketing">
          AI Marketing
        </Link>
        <Link to="/web-development">
          Web Development
        </Link>

        <button className="contact-btn">
          Get Free Consultation
        </button>
      </div>
    </nav>
  );
}

export default Navbar;