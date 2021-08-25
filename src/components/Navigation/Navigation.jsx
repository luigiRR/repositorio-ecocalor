import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Logo from '../../assets/Navbar/sol.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-50 fixed inset-x-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
             <Link to="/">
              <img
                  className="h-36 w-36"
                  src={Logo}
                  alt="logo-ecocalor"
              />
             </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-2xl hover:bg-red-400 text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inicio
                </Link>

                <Link
                  to="/About"
                  className="text-2xl text-black hover:bg-red-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Nosotros
                </Link>

                <Link
                  to="/Services"
                  className="text-2xl text-black hover:bg-red-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Servicios
                </Link>

                <Link
                  to="/Blog"
                  className="text-2xl text-black hover:bg-red-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </Link>

                <Link
                  to="/Contact"
                  className="text-2xl text-black hover:bg-red-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contactanos
                </Link>

              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="hover:bg-red-400 text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Inicio
              </Link>

              <Link
                to="/About"
                className="text-black hover:bg-red-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Nosotros
              </Link>

              <Link
                to="Services"
                className="text-black hover:bg-red-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Servicios
              </Link>

              <Link
                to="/Blog"
                className="text-black hover:bg-red-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Bolg
              </Link>

              <Link
                to="Contact"
                className="text-black hover:bg-red-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contactanos
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}
