
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/Navbar/sol.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Cambia el estado cuando el usuario hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    backgroundColor: isScrolled ? 'rgba(249, 250, 251, 0.9)' : 'transparent',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    boxShadow: isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
  };

  const linkStyle = {
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    color: '#333',
    textDecoration: 'none',
    borderRadius: '0.375rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'color 0.4s ease',
  };

  const linkHoverStyle = {
    color: 'white',
  };

  const linkBefore = {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '0%',
    height: '2px',
    backgroundColor: '#EF4444',
    transition: 'width 0.4s ease, left 0.4s ease',
  };

  const mobileMenuStyle = {
    display: isOpen ? 'block' : 'none',
    padding: '0.5rem 0',
    backgroundColor: '#F9FAFB',
    borderRadius: '0.375rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'opacity 0.4s ease',
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Mapeo de rutas en inglés con textos en español
  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/services', label: 'Servicios' },
    { path: '/about', label: 'Nosotros' },
    { path: '/contact', label: 'Contáctanos' },
  ];

  const logoStyle = {
    height: '90px',  // Ajusta el tamaño de la imagen
    marginRight: '1rem', // Espacio entre el logo y el menú
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '80px' }}>
          {/* Logo */}
          <div style={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={Logo} alt="Logo" style={logoStyle} /> {/* Cambia la ruta a tu logo */}
            </Link>
          </div>

          {/* Menú de Navegación */}
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.color = linkHoverStyle.color;
                    const before = e.target.querySelector('span');
                    before.style.width = '100%';
                    before.style.left = '0';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#333';
                    const before = e.target.querySelector('span');
                    before.style.width = '0%';
                    before.style.left = '50%';
                  }}
                >
                  {item.label} {/* Muestra el nombre en español */}
                  <span style={linkBefore} />
                </Link>
              ))}
            </div>
          </div>

          {/* Botón del Menú Móvil */}
          <div style={{ marginLeft: 'auto' }}>
            <button onClick={toggleMenu} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                style={{ width: '24px', height: '24px' }}
              >
                {!isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú para móviles */}
      <div style={mobileMenuStyle}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={{ ...linkStyle, display: 'block', textAlign: 'center' }}
            onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = '#333'}
          >
            {item.label} {/* Muestra el nombre en español */}
          </Link>
        ))}
      </div>
    </nav>
  );
}
