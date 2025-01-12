import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="bg-cover bg-center">
            <div className="bg-gray-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-6">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                                    <h2 className="font-bold text-xl text-gray-50 mb-4">SOL DE MIMMI</h2>
                                    <p className="text-gray-50 text-justify">
                                        SOL DE MIMMI es un sitio para desarrolladores, estudiantes y aprendices,
                                        donde pueden obtener cientos de componentes de HTML y probar código en línea rápidamente.
                                    </p>
                                    <div className="flex mt-6 space-x-2">
                                        <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl" />
                                        <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
                                        <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl" />
                                        <FontAwesomeIcon icon={faYoutube} className="text-white text-2xl" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 flex">
                                    <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
                                        <h2 className="font-bold text-gray-50 mb-4 text-xl">Menú</h2>
                                        <ul className="text-gray-50 text-sm">
                                            <li className="pt-1 pb-2"><Link to="/">Inicio</Link></li>
                                            <li className="pt-1 pb-2"><Link to="/Doc">Documentos</Link></li>
                                            <li className="pt-1 pb-2"><Link to="/About">Nosotros</Link></li>
                                            <li className="pt-1 pb-2"><Link to="/Services">Servicios</Link></li>
                                            <li className="pt-1 pb-2"><Link to="/Contact">Contactanos</Link></li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <h2 className="font-bold text-gray-50 mb-4 text-xl">Redes Sociales</h2>
                                        <ul className="text-gray-50 text-sm">
                                            <li className="pt-1 pb-2">
                                                <a href="https://www.facebook.com/EcocalorCV" className="flex items-center hover:text-blue-700">
                                                    <span className="mr-2">Facebook</span>
                                                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                                                </a>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <a href="https://www.instagram.com/ecocalorcv/" className="flex items-center hover:text-red-400">
                                                    <span className="mr-2">Instagram</span>
                                                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                                                </a>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <a href="https://twitter.com/EcocalorCV" className="flex items-center hover:text-blue-400">
                                                    <span className="mr-2">Twitter</span>
                                                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                                                </a>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <a href="https://www.youtube.com/channel/UCKy5yVeXVXekNkyq5c2jtwg" className="flex items-center hover:text-red-600">
                                                    <span className="mr-2">YouTube</span>
                                                    <FontAwesomeIcon icon={faYoutube} size="lg" />
                                                </a>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <a href="" className="flex items-center hover:text-pink-500">
                                                    <span className="mr-2">TikTok</span>
                                                    <FontAwesomeIcon icon={faTiktok} size="lg" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 text-gray-50 text-sm">
                            <p className="text-justify mb-6">
                                Si envías un e-mail con tus datos personales, estos serán utilizados únicamente para responder
                                tu mensaje. No compartiremos tus datos con terceros.
                            </p>
                            <p className="text-center mb-6">
                                © 2021 <span className="font-bold">SOL DE MIMMI</span> - Todos los derechos reservados.
                            </p>
                            <p className="text-center">
                                Diseñado por <span className="font-bold">SOL DE MIMMI</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}