import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="bg-cover bg-center">
            <div className="bg-gray-50">
                <div className="container mx-auto px-6 lg:px-20 py-12">
                    <div className="lg:flex">
                        <div className="w-full lg:w-2/3">
                            <div className="lg:flex">
                                <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
                                    <h2 className="font-bold text-xl text-gray-600 mb-4">Ecocalor</h2>
                                    <p className="text-gray-400">
                                        Ecocalor is a site for developer, student and learner,
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
                                        <h2 className="font-bold text-gray-600 mb-4">
                                            Menú</h2>
                                        <ul className="text-gray-500 text-xl">
                                            <li className="pt-1 pb-2">
                                                <Link to="/">Inicio</Link>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <Link to="/About">Nosotros</Link>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <Link to="/Services">Servicios</Link>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <Link to="/Blog">Blog</Link>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <Link to="/Contact">Contactnos</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                                        <h2 className="font-bold text-gray-600 mb-4">
                                            Redes Sociales</h2>
                                        <ul className="text-gray-500 text-xl">
                                            <li className="pt-1 pb-2">
                                                <a href="" className="flex space-x-2">
                                                    <p>Facebook</p>
                                                    <FontAwesomeIcon className="hover:text-blue-700" icon={faFacebook}/>
                                                </a>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <a href="">
                                                    Instagram
                                                    <FontAwesomeIcon className="hover:text-red-400" icon={faInstagram}/>
                                                </a>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <a href="#">
                                                    Twitter
                                                    <FontAwesomeIcon className="hover:text-blue-400" icon={faTwitter}/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <h2 className=" font-bold text-gray-600 mb-4">
                                Our Newsletter
                            </h2>
                            <div className="text-gray-500 mb-8">
                                Subscribe our weely Newsletter to get regular updates about our blogs.
                            </div>
                            <div className="flex">
                                <input type="text" className="rounded-l px-2 focus:outline-none"/>
                                <button className="text-gray-200 rounded-r hover:bg-blue-500 px-4 py-2 focus:outline-none"
                                    >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex justify-center text-gray-600 mb-1">
                        © 2021  <span className="font-bold">Ecocalor</span> 2021 todos los derechos reservados.
                    </div>
                    <div className="flex font-light justify-center text-gray-500 text-sm">
                        <p>Designed by <span className="font-bold">Ecocalor</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
