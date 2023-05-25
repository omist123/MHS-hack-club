import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/navbar.css";
import logo from "../assets/hackclub-flag.svg";
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
          <a href="/">Home</a>
          <a href="/join">Join</a>
          <a href="/donate">Donate</a>
          <a className="contact-btn" href="/contact">
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
