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

            <div className="container grid grid-cols-2 gap-4">
                <div>
                    <p className="text-justify pt-8">
                        Somos un equipo de profesionales, comprometidos con los cambios
                        ambientales y climáticos en nuestro territorio, por tal motivo
                        desarrollamos sistemas integrales para las edificaciones
                        privadas y públicas; teniendo presente las exigencias y 
                        el veneficio principal para nuestros clientes; el ahorro
                        se obtiene por la no existencia de recibo de energía eléctrica.
                        La inversión es recuperada en un corto periodo de tiempo.
                    </p>
                </div>
                <div></div>
                <div>
                    <h3 className="uppercase text-xl text-blue-700 font-bold">mision</h3>
                    <div>
                        <p className="text-justify">
                            Innovación y desarrollo de soluciones energéticas ecológicas,
                            para las edificaciones en el territorio nacional, frente a los
                            cambios climáticos del nuevo milenio. Respetando el medio
                            ambiente.
                        </p>
                    </div>
                </div>
                <div></div>
                <div>
                    <h3 className="uppercase text-xl text-blue-700 font-bold">vision</h3>
                    <div>
                        <p className="text-justify">
                            Consolidar en el mercado de las edificaciones sea en la construcción 
                            y la comercialización, el factor climatológico, como nuevo punto
                            estratégico primordial; para el comfort de los usuarios.
                        </p>
                    </div>
                </div>
                <div></div>
                <div>
                    <h3 className="uppercase text-xl text-blue-700 font-bold">valores</h3>
                    <div>
                        <p className="text-justify">
                            Ponemos a disposición todo aquello que nos representa como
                            empresa, nos comprometemos con nuestros clientes, utilizando los
                            puentes de: la sinceridad, credibilidad, responsabilidad, orden,
                            gentileza y desarrollo humano.
                        </p>
                    </div>
                </div>
                <div></div>
            </div>

            <Footer/>
        </div>
    )
}