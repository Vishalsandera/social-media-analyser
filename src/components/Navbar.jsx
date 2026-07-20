import { useState } from "react";
import Container from "../layout/Container";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <Container>

        <div className="navbar-wrapper">

          <a href="#" className="logo">

            <div className="logo-icon">
              📊
            </div>

            <div className="logo-text">

              <span className="logo-title">
                Social Media
              </span>

              <span className="logo-subtitle">
                Analyser
              </span>

            </div>

          </a>

          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

            <a href="#" onClick={closeMenu}>
              Home
            </a>

            <a href="#features" onClick={closeMenu}>
              Features
            </a>

            <a href="#">
              Pricing
            </a>

            <a href="#">
              About
            </a>

            <a href="#">
              Contact
            </a>

            <div className="mobile-buttons">

              <button
                className="login-btn"
                onClick={closeMenu}
              >
                Login
              </button>

              <button
                className="primary-btn"
                onClick={closeMenu}
              >
                Get Started
              </button>

            </div>

          </nav>

          <div className="desktop-buttons">

            <button className="login-btn">
              Login
            </button>

            <button className="primary-btn">
              Get Started
            </button>

          </div>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >

            <span></span>

            <span></span>

            <span></span>

          </button>

        </div>

      </Container>

    </header>
  );
}

export default Navbar;
