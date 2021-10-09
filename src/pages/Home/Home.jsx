import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Slider from '../../components/Hero-Slider/Slider'
import TitleHead from '../../components/UI/TitleHead/TitleHead'
import Modals from '../../components/UI/Modal/Modals'
import Footer from '../../components/Footer/Footer'

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
                            ventilación, es el NO estudio del diseño, la instalación y
                            el funcionamiento de los envolventes (muros, losa de techo y pisos) de las
                            edificaciones; las cuales cumplen una función principal dentro
                            del sistema del comfort térmico; por lo tanto, la
                            energía que necesita una edificación esta directamente
                            relacionada a la función mecánica de las envolventes y de las personas
                            que habitan en la edificación.
                        </p>
                    </div>
                </div>
                <div className="text-center">2</div>

                <div className="">
                    <span></span>
                    <h2 className="uppercase text-red-700 text-2xl">el comfort termico</h2>
                    <div>
                    <p className="text-justify pb-2">
                        Representa la opción del organismo humano de cambiar con el ambiente la
                        cantidad de calor necesaria para la función metabólica, a través
                        de una equilibrada relación entre los procesos de radiación,
                        convención y conducción, sudoración y respiración; los factores
                        que determinan el comfort térmico son muchos, pero los más
                        importantes son:
                    </p>
                    <Modals/>
                    </div>
                </div>
                <div className="text-center">4</div>

                <div className="">
                    <span></span>
                    <h2 className="uppercase text-red-700 text-2xl">instalación térmica</h2>
                    <div>
                        <p className="text-justify">
                            La moderna tecnología del sistema de instalación térmica,
                            permite obtener una calefacción en los ambientes de la edificación,
                            utilizando la radiación del sol, que por medio de la emisión, propagación y
                            transferencia de energia en forma de ondas electromagnéticas o partículas;
                            la cual viene transferida al fluido vector, esta energia incrementa el calor
                            del fluido al interno de las tuberias.
                            El aumento de temperatura del fluido vector es transmitido a los
                            ambientes requeridos por medio de los escambiadores de calor,
                            por medio de la convección y radiación.
                            Nuestro sistema de instalación térmica, se integra
                            perfectamente con las envolventes de la edificación; otorgando
                            como resultado el comfort térmico deseado, la temperatura comprendida 
                            entre 22°C y 27°C con una humedad relativa entre 40% y 60%; son los
                            parametros para un correcto ambiente comfortable.
                        </p>
                    </div>
                </div>
                <div className="text-center">6</div>
                
            </div>
            <Footer/>
           
        </div>
    )
}
