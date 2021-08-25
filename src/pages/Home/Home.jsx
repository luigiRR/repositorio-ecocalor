import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Slider from '../../components/Hero-Slider/Slider'
import TitleHead from '../../components/UI/TitleHead/TitleHead'
import Modals from '../../components/UI/Modal/Modals'

export default function Home() {
    return (
        <div className="">
            <Navigation/>
            <Slider/>
            <TitleHead>desarrollamos sistemas orientados a la eficiencia de la energia termica</TitleHead>
            <div className="container grid grid-cols-2 gap-4">
                <div className="">
                    <div>
                        <br />
                        <p className="pb-2 text-red-700 text-2xl">
                            ¿Cuanta energía termica necesita una edificación?
                        </p> 
                        <p className="text-justify">
                            Los principales problemas que por conservación y convención se
                            ha venido desarrollando en los sistemas de calefacción y
                            ventilación, es el NO estudio, diseño, instalación y
                            funcionamiento de los envolventes (muros) de las
                            edificaciones; las cuales cumplen una función principal dentro
                            del sistema del confort termico; por lo tanto, la
                            energía que necesita una edificación esta directamente
                            relacionada a la función mecánica de las envolventes para
                            obtener un adecuado confort térmico.
                        </p>
                    </div>
                </div>
                <div className="text-center">2</div>

                <div className="">
                    <span></span>
                    <h2 className="uppercase text-red-700 text-2xl">el confort termico</h2>
                    <div>
                    <p className="text-justify pb-2">
                        Representa la opción del organismo humano de cambiar con el ambiente la
                        cantidad de calor necesaria para la función metabólica, atreves
                        de una equilibrada relación entre los procesos de radiación,
                        convención y conducción, sudoración y respiración; los factores
                        que determinan el confort térmico son muchos, pero los más
                        importantes son:
                    </p>
                    <Modals/>
                    </div>
                </div>
                <div className="text-center">4</div>

                <div className="">
                    <span></span>
                    <h2 className="uppercase">la instalación solar termica</h2>
                    <div>
                        <p className="text-justify">
                            La moderna tecnología del sistema de instalación solar térmica,
                            permite obtener una calefacción y ventilación en los ambientes,
                            utilizando la radiación solar la cual transmite energia al
                            fluido vector que se encuentra dentro de los paneles solares; el
                            aumento de tempratura del fluido vector es transmitido a los
                            ambientes requeridos a travez de la convección y radiación.
                            Nuestro sistema de instalación solar termica, se integran
                            perfectamente con las envolventes de la edificación; otorgando
                            como resultado el confort térmico deseado. El veneficio
                            principal es el nivel de ahorro que se obtiene por la no
                            existencia de recibo de energía eléctrica, esta inversión es
                            recuperada en un corto periodo de tiempo.
                        </p>
                    </div>
                </div>
                <div className="text-center">6</div>
                
            </div>
           
        </div>
    )
}
