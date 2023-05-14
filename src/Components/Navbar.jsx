import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/navbar.css";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div>
      <header>
        <h3>MHS Hack Club</h3>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Join</a>
          <a href="/#">Donate</a>
          <a className="contact-btn" href="/#">
            Contact
          </a>
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
