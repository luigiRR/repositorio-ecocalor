import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Slider from '../../components/Hero-Slider/Slider'
import TitleHead from '../../components/UI/TitleHead/TitleHead'
import Footer from '../../components/Footer/Footer'

export default function About() {
    return (
        <div>
            <Navigation/>
            <Slider/>
            <TitleHead>realizamos progresos para el desarrollo del comfort termico de calidad</TitleHead>

            <div className="container">
                <div>
                    <p className="text-justify pt-8">
                        Somos un equipo de profesionales, comprometidos con los cambios
                        ambientales y climáticos en nuestro territorio, por tal motivo
                        desarrollamos sistemas integrales para las edificaciones
                        privadas y públicas; teniendo presente las exigencias y 
                        el veneficio principal para nuestros clientes; el ahorro
                        se obtiene por la no creación de un recibo de energía eléctrica,
                        siendo la inversion recuperada en un corto periodo de tiempo.
                        La inversión es recuperada en un corto periodo de tiempo.
                    </p>
                </div>
                
                <div>
                    <h3 className="uppercase text-xl text-blue-700 font-bold pt-5">mision</h3>
                    <div>
                        <p className="text-justify">
                            Innovación y desarrollo de soluciones energéticas ecológicas,
                            para las edificaciones en el territorio nacional, frente a los
                            cambios climáticos del nuevo milenio. Respetando el medio
                            ambiente.
                        </p>
                    </div>
                </div>
               
                <div>
                    <h3 className="uppercase text-xl text-blue-700 font-bold pt-5">vision</h3>
                    <div>
                        <p className="text-justify">
                            Consolidar en el mercado de las edificaciones sea en la construcción 
                            y la comercialización, el factor climatológico, como nuevo punto
                            estratégico primordial; para el confort de los usuarios.
                        </p>
                    </div>
                </div>
               
                <div>
                    <h3 className="uppercase text-xl text-blue-700 font-bold pt-5">valores</h3>
                    <div>
                        <p className="text-justify">
                            Ponemos a disposición todo aquello que nos representa como
                            empresa, nos comprometemos con nuestros clientes, utilizando los
                            puentes de: la sinceridad, credibilidad, responsabilidad, orden,
                            gentileza y desarrollo humano.
                        </p>
                    </div>
                </div>

                <div className='images-about mb-8 mt-5 flex justify-center space-x-4'>
                    <div>
                        <img
                            className='h-64 w-80 object-cover rounded-lg shadow-md'
                            alt="decorative"
                            src='https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FImagen%20de%20WhatsApp%202024-08-31%20a%20las%2010.55.49_388b138c.jpg?alt=media&token=e229e8d4-2888-4c41-95f7-5ec0288b3602'
                        />
                    </div>
                    <div>
                        <img
                            className='h-64 w-80 object-cover rounded-lg shadow-md'
                            alt="decorative"
                            src='https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FImagen%20de%20WhatsApp%202024-08-31%20a%20las%2010.55.50_abc2537f.jpg?alt=media&token=0c054931-1402-475d-8cd4-8d3570650112'
                        />
                    </div>
                    <div>
                        <img
                            className='h-64 w-80 object-cover rounded-lg shadow-md'
                            alt="decorative"
                            src='https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FImagen%20de%20WhatsApp%202024-08-31%20a%20las%2010.55.49_9ca824c5.jpg?alt=media&token=3692210c-58f6-425c-9203-9e04d279a32e'
                        />
                    </div>
                    <div>
                        <img
                            className='h-64 w-80 object-cover rounded-lg shadow-md'
                            alt="decorative"
                            src='https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FImagen%20de%20WhatsApp%202024-08-31%20a%20las%2010.55.51_5797e63c.jpg?alt=media&token=5ae7cf32-62c4-4a0d-aa27-6bcab97d86b3'
                        />
                    </div>
                </div>

                
            </div>
            <Footer/>
        </div>
    )
}