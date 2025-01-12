import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/Navbar/sol.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle = {
    backgroundColor: isScrolled ? '#0ac0dd' : 'transparent',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    padding: '0 1rem',
    transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
    boxShadow: isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
  };

  const mobileMenuStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '1rem 0',
    zIndex: 9,
  };

  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/doc', label: 'Documentos' },
    { path: '/services', label: 'Servicios' },
    { path: '/about', label: 'Nosotros' },
    { path: '/contact', label: 'Contáctanos' },
  ];

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', height: '80px' }}>
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ height: '60px' }} />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ flexGrow: 1, display: 'none', justifyContent: 'flex-end', gap: '1rem' }}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                fontSize: '1rem',
                color: '#333',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            marginLeft: 'auto',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ width: '24px', height: '24px' }}
          >
            {!isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div style={mobileMenuStyle}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '1rem',
                fontSize: '1.2rem',
                color: '#333',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <style>
        {`
          @media (min-width: 768px) {
            .desktop-menu {
              display: flex !important;
            }
          }
        `}
      </style>
    </nav>
  );
}
