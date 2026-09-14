import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="/#home" className="logo" onClick={closeMenu}>
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
        <li>
          <a href="/#home" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="/#about" onClick={closeMenu}>About</a>
        </li>

        <li>
          <a href="/#skills" onClick={closeMenu}>Skills</a>
        </li>

        <li>
          <a href="/#projects" onClick={closeMenu}>Projects</a>
        </li>

        <li>
          <a href="/#experience" onClick={closeMenu}>Experience</a>
        </li>

        <li>
          <a href="/#education" onClick={closeMenu}>Education</a>
        </li>

        <li>
          <a href="/#certifications" onClick={closeMenu}>
            Certifications
          </a>
        </li>

        <li>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;