import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Slider from '../../components/Hero-Slider/Slider'
import TitleHead from '../../components/UI/TitleHead/TitleHead'

export default function About() {
    return (
        <div>
            <Navigation/>
            <Slider/>
            <TitleHead>realizamos progresos para el desarrollo del confort termico de calidad</TitleHead>

            <div className="container grid grid-cols-2 gap-4">
                <div>
                    <p className="text-justify pt-8">
                        Somos un equipo de profesionales, comprometidos con los cambios
                        ambientales y climáticos en nuestro territorio, por tal motivo
                        desarrollamos sistemas integrales para las edificaciones
                        privadas y públicas; teniendo presente las exigencias y el
                        ahorro de los clientes. Nuestros objetivo y principios
                        primordiales es el cuidado y respeto del medio ambiente.
                    </p>
                </div>
                <div></div>
                <div>
                    <h3 className="uppercase">mision</h3>
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
                    <h3 className="uppercase">vision</h3>
                    <div>
                        <p className="text-justify">
                            Consolidar en el mercado de las edificaciones sea la construcción 
                            y la comercializacion, el factor climatológico, como nuevo punto
                            estratégico primordial, para el confort de los habitantes.
                        </p>
                    </div>
                </div>
                <div></div>
                <div>
                    <h3 className="uppercase">valores</h3>
                    <div>
                        <p className="text-justify">
                            Ponemos a disposición todo aquello que nos representa como
                            empresa, comprometidos con nuestros clientes, utilizando como
                            puente: la sinceridad, credibilidad, responsabilidad, orden,
                            gentileza y desarrollo humano
                        </p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
