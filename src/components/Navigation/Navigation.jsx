import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Navbar/sol.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta si el dispositivo es móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Comprobación inicial
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { path: "/", label: "Inicio" },
    { path: "/doc", label: "Documentos" },
    { path: "/services", label: "Servicios" },
    { path: "/about", label: "Nosotros" },
    { path: "/contact", label: "Contáctanos" },
  ];

  const navStyle = {
    backgroundColor: "#0ac0dd",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
    height: "80px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    fontSize: "1.2rem",
    padding: "0.5rem 1rem",
    color: "#333",
    textDecoration: "none",
    borderRadius: "0.375rem",
    transition: "color 0.4s ease",
  };

  const linkHoverStyle = {
    color: "white",
  };

  const mobileMenuStyle = {
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "80px",
    left: 0,
    right: 0,
    backgroundColor: "#F9FAFB",
    padding: "1rem 0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 9,
  };

  const logoStyle = {
    height: "60px",
    marginRight: "1rem",
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <Link to="/" style={{ flexGrow: 1 }}>
        <img src={Logo} alt="Logo" style={logoStyle} />
      </Link>

      {/* Menú móvil */}
      {isMobile ? (
        <React.Fragment>
          <button
            onClick={toggleMenu}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
              color: "#333",
            }}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ width: "24px", height: "24px" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ width: "24px", height: "24px" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <div style={mobileMenuStyle}>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                style={{ ...linkStyle, textAlign: "center", padding: "1rem" }}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </React.Fragment>
      ) : (
        // Menú de escritorio
        <div style={{ display: "flex", gap: "1rem" }}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
