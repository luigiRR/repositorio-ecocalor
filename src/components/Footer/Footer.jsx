import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8">
                {/* Contenedor principal */}
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* Columna izquierda */}
                    <div className="mb-8 lg:mb-0 lg:w-2/3">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold">SOL DE MIMMI</h2>
                            <p className="mt-4 text-justify">
                                SOL DE MIMMI es un sitio para desarrolladores, estudiantes y aprendices, donde pueden
                                obtener cientos de componentes de HTML y probar código en línea rápidamente.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl hover:text-blue-700" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-pink-500" />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:text-blue-400" />
                            </a>
                            <a href="#" aria-label="YouTube">
                                <FontAwesomeIcon icon={faYoutube} className="text-white text-2xl hover:text-red-600" />
                            </a>
                            <a href="#" aria-label="TikTok">
                                <FontAwesomeIcon icon={faTiktok} className="text-white text-2xl hover:text-pink-400" />
                            </a>
                        </div>
                    </div>
                    {/* Columna derecha */}
                    <div className="lg:w-1/3">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-xl mb-4">Menú</h3>
                                <ul>
                                    <li className="mb-2"><Link to="/" className="hover:underline">Inicio</Link></li>
                                    <li className="mb-2"><Link to="/Doc" className="hover:underline">Documentos</Link></li>
                                    <li className="mb-2"><Link to="/About" className="hover:underline">Nosotros</Link></li>
                                    <li className="mb-2"><Link to="/Services" className="hover:underline">Servicios</Link></li>
                                    <li><Link to="/Contact" className="hover:underline">Contáctanos</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-4">Redes Sociales</h3>
                                <ul>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center hover:underline">
                                            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center hover:underline">
                                            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                                            Instagram
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center hover:underline">
                                            <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                                            Twitter
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center hover:underline">
                                            <FontAwesomeIcon icon={faYoutube} className="mr-2" />
                                            YouTube
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center hover:underline">
                                            <FontAwesomeIcon icon={faTiktok} className="mr-2" />
                                            TikTok
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pie de página */}
                <div className="mt-8 text-center text-sm">
                    <p className="mb-2">
                        Si envías un e-mail con tus datos personales, estos serán utilizados únicamente para responder tu mensaje. No compartiremos tus datos con terceros.
                    </p>
                    <p>© 2025 <span className="font-bold">SOL DE MIMMI</span> - Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
