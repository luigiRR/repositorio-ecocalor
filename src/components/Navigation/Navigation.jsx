import React, { useState } from "react";
import { Link } from "react-router-dom";
// Importa tu logo aquí si lo necesitas
import Logo from '../../assets/Navbar/sol.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {
    backgroundColor: '#F9FAFB', // Color de fondo
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra
    transition: 'background-color 0.4s ease, box-shadow 0.4s ease', // Transiciones suaves
  };

  const logoStyle = {
    height: '60px', // Ajusta la altura de tu logo
    width: 'auto',
  };

  const linkStyle = {
    fontSize: '1.2rem', // Tamaño de fuente para los enlaces
    padding: '0.5rem 1rem',
    color: '#333', // Color del texto
    textDecoration: 'none',
    borderRadius: '0.375rem', // Bordes redondeados
    position: 'relative', // Para el efecto de pseudo-elemento
    overflow: 'hidden', // Asegura que el pseudo-elemento no se desborde
    transition: 'color 0.4s ease', // Transiciones suaves para el color
  };

  const linkHoverStyle = {
    color: 'white', // Color del texto al pasar el mouse
  };

  const linkBefore = {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '0%',
    height: '2px',
    backgroundColor: '#EF4444', // Color de la línea de efecto
    transition: 'width 0.4s ease, left 0.4s ease', // Transiciones suaves
  };

  const mobileMenuStyle = {
    display: isOpen ? 'block' : 'none',
    padding: '0.5rem 0',
    backgroundColor: '#F9FAFB',
    borderRadius: '0.375rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra para el menú móvil
    transition: 'opacity 0.4s ease', // Suaviza la aparición del menú móvil
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)', // Suaviza la entrada
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '80px' }}>
          <div style={{ flexShrink: 0 }}>
            <Link to="/">
              {/* Agrega aquí el logo si lo necesitas */}
              <img style={logoStyle} src={Logo} alt="logo-ecocalor" /> 
            </Link>
          </div>
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              {['/', '/About', '/Services', '/Blog', '/Contact'].map((path, index) => {
                const linkText = path.substring(1) || "Inicio"; // Extraer texto del path
                return (
                  <Link
                    key={index}
                    to={path}
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.target.style.color = linkHoverStyle.color; // Cambia el color al pasar el mouse
                      const before = e.target.querySelector('span'); // Selecciona el pseudo-elemento
                      before.style.width = '100%'; // Aumenta el ancho del pseudo-elemento
                      before.style.left = '0'; // Cambia la posición
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#333'; // Restaura el color
                      const before = e.target.querySelector('span');
                      before.style.width = '0%'; // Restaura el ancho
                      before.style.left = '50%'; // Restaura la posición
                    }}
                  >
                    {linkText}
                    <span style={linkBefore} /> {/* Pseudo-elemento para la línea */}
                  </Link>
                );
              })}
            </div>
          </div>
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

      <div style={mobileMenuStyle}>
        {['/', '/About', '/Services', '/Blog', '/Contact'].map((path, index) => {
          const linkText = path.substring(1) || "Inicio"; // Extraer texto del path
          return (
            <Link
              key={index}
              to={path}
              style={{ ...linkStyle, display: 'block', textAlign: 'center' }}
              onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
              onMouseLeave={(e) => e.target.style.color = '#333'}
            >
              {linkText}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
