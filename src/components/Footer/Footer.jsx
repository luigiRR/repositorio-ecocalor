import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="bg-cover bg-center">
            <div className="bg-gray-700">
                <div className="container mx-auto px-6 lg:px-20 py-4">
                    <div className="lg:flex">
                        <div className="w-full lg:w-2/3">
                            <div className="lg:flex">
                                <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
                                    <h2 className="font-bold text-xl text-gray-50 mb-4">SOL DE MIMMI</h2>
                                    <p className="text-gray-50 text-justify">
                                        SOL DE MIMMI is a site for developer, student and learner,
                                        where they can grab
                                        hundreds of various html component code and try online as fast as posible without...
                                    </p>
                                    <div className="flex mt-6">
                                        <i className="flex items-center justify-center h-12 w-12 mr-1 rounded-full fab fill-current text-white text-xl fa-facebook-f"></i>
                                        <i lassName="flex items-center justify-center h-12 w-12 mx-1 rounded-full fas fill-current text-white text-xl fa-envelope"></i>
                                        <i className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-instagram"></i>
                                        <i className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-twitter"></i>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 lg:flex lg:px-6 ">
                                    <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                                        <h2 className="font-bold text-gray-50 mb-4 text-xl">
                                            Menú</h2>
                                        <ul className="text-gray-50 text-sm">
                                            <li className="pt-1 pb-2">
                                                <Link to="/">Inicio</Link>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <Link to="/About">Nosotros</Link>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <Link to="/Services">Servicios</Link>
                                            </li>
                                            {/* <li className="pt-1 pb-2">
                                                <Link to="/Blog">Blog</Link>
                                            </li> */}
                                            <li className="pt-1 pb-2">
                                                <Link to="/Contact">Contactanos</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                                        <h2 className="font-bold text-gray-50 mb-4 text-xl">
                                            Redes Sociales</h2>
                                        <ul className="text-gray-50 text-sm">
                                            <li className="pt-1 pb-2">
                                                <a href="https://www.facebook.com/Ecocalor-Calefacci%C3%B3n-Y-Ventilaci%C3%B3n-284982982430389/?ref=pages_you_manage" className="flex flex-wrap hover:text-blue-700">
                                                    <div className="pt-1 pr-3"><p>Facebook</p></div>
                                                    <div><FontAwesomeIcon icon={faFacebook} size="2x"/></div>
                                                </a>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <a href="https://www.instagram.com/ecocalorcv/" className="flex flex-wrap hover:text-red-400">
                                                    <div className="pt-1 pr-2.5"><p>Instagram</p></div>
                                                    <div><FontAwesomeIcon icon={faInstagram} size="2x"/></div>
                                                </a>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <a href="https://twitter.com/EcocalorCV" className="flex flex-wrap hover:text-blue-400">
                                                    <div className="pt-1 pr-8"><p>Twitter</p></div>
                                                    <div><FontAwesomeIcon icon={faTwitter} size="2x"/></div>
                                                </a>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <a href="https://www.youtube.com/channel/UCKy5yVeXVXekNkyq5c2jtwg" className="flex flex-wrap hover:text-red-600">
                                                    <div className="pt-1 pr-3.5"><p>YouTube</p></div>
                                                    <div><FontAwesomeIcon icon={faYoutube} size="2x"/></div>
                                                </a>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <a href="" className="flex flex-wrap hover:text-pink-500">
                                                    <div className="pt-1 pr-8"><p>TikTok</p></div>
                                                    <div><FontAwesomeIcon icon={faTiktok} size="2x"/></div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <div className="text-justify text-gray-50 mb-1">
                                <p>Si envias un e-mail con tus datos personales, que voluntariamente
                                    decides comunicarnos, estos serán utilizados unicamente para responder
                                    tu mensaje.
                                    No cumincaremos tús datos a terceros
                                </p>
                            </div>
                            <div className="justify-center text-gray-50 mb-1 mt-6">
                                © 2021  <span className="font-bold">SOL DE MIMMI</span> 2021 todos los derechos reservados.
                            </div>
                            <div className="font-light justify-center text-gray-50 text-sm">
                                <p>Designed by <span className="font-bold">SOL DE MIMMI</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
