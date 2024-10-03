import React from 'react'
import Navigation from '../../components/Navigation/Navigation'

export default function Contact() {
    return (
        <div>
            <Navigation/>
            <br /><br /><br />

            <div className="container mx-auto shadow">
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div  className="w-full h-5/6 bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg contact_image"></div>

                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center text-blue-500">Solicita orientación!</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										Nombre
									</label>
									<input
										className="required w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="Nombre"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Apellido
									</label>
									<input
										className="required w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Apellido"
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									className="required w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>

                            <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									Dirección
								</label>
								<input
									className="required w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Direccion"
								/>
							</div>
                            <div>
                                <textarea 
                                    className="required w-full h-auto px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name="textarea" rows="10" cols="50"
                                    placeholder="Mensaje"  
                                ></textarea>
                            </div>
							<div className="mb-6 text-center">
								<button
									className="w-3/6 px-2 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Enviar
								</button>
							</div>
						</form>
					</div>

                    </div>
                </div>
                
            </div>
        </div>

    )
}
