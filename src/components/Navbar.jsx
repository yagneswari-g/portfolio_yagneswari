import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun, FaDownload } from "react-icons/fa";
import { navLinks, profile } from "../data/portfolioData";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>Y</span>agneswari
        </a>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((link) => {
            const sectionName = link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={activeSection === sectionName ? "active-link" : ""}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <a className="resume-small-btn" href={profile.resume} download>
            <FaDownload /> Resume
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
