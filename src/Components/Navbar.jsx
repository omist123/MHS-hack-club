import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react"; // Import useState
import "../Styles/navbar.css";
import logo from "../assets/hackclub-flag.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false); // Add state to track whether the navbar is open

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
    setIsOpen(false); // Ensure isOpen is set to false
  };

  return (
    <div>
      <header>
        <img className="w-36 h-36 " src={logo} alt="" />

        <nav ref={navRef} className={isOpen ? "responsive_nav" : ""}>
          <Link to="/" onClick={closeNavbar}>
            Home
          </Link>
          <Link to="/join" onClick={closeNavbar}>
            Join
          </Link>
          <Link to="/donate" onClick={closeNavbar}>
            Donate
          </Link>

          <Link className="contact-btn" to="/contact" onClick={closeNavbar}>
            Contact
          </Link>
        </nav>
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>
    </div>
  );
}

export default Navbar;
