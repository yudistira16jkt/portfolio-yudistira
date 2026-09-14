import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a to="/" className="logo" onClick={closeMenu}>
        PORTFOLIO
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li><a to="/#home" onClick={closeMenu}>Home</a></li>
        <li><a to="/#about" onClick={closeMenu}>About</a></li>
        <li><a to="/#skills" onClick={closeMenu}>Skills</a></li>
        <li><a to="/#projects" onClick={closeMenu}>Projects</a></li>
        <li><a to="/#experience" onClick={closeMenu}>Experience</a></li>
        <li><a to="/#education" onClick={closeMenu}>Education</a></li>
        <li><a to="/#certifications" onClick={closeMenu}>Certifications</a></li>
        <li><a to="/#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;