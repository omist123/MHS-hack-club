import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/navbar.css";
import logo from "../assets/hackclub-flag.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div>
      <header>
        <img className="w-36 h-36 " src={logo} alt="" />

        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/join">Join</Link>
          <Link to="/donate">Donate</Link>

          <Link className="contact-btn" to="/contact">
            Contact
          </Link>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}
export default Navbar;
