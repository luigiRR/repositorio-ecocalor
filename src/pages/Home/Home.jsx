import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Slider from '../../components/Hero-Slider/Slider'
import TitleHead from '../../components/UI/TitleHead/TitleHead'
import Modals from '../../components/UI/Modal/Modals'
import Footer from '../../components/Footer/Footer'

export default function Home() {

    const [downloading, setDownloading] = useState(false);
    const fileId = '1F3S71SHQdc1VAmeBRh7Aj0BXP-Jy14sW';
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const handleDownload = () => {
        setDownloading(true);
        const link = document.createElement('a');
        link.href = downloadLink;
        link.download = 'archivo.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
            setDownloading(false);
        }, 3000);
    };

    return (
        <div className="">
            <Navigation/>
            <Slider/>
            <TitleHead>desarrollamos sistemas orientados a la eficiencia de la energia termica</TitleHead>
            <div className="container grid grid-cols-2 gap-4 mb-3">
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
                            el funcionamiento de las envolventes (muros, losa de techo y pisos) de las
                            edificaciones; las cuales cumplen una función principal dentro
                            del sistema del comfort térmico; por lo tanto, la
                            energía que necesita una edificación esta directamente
                            relacionada a la función mecánica de las envolventes y los elementos al interior de la edificacion.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="mt-5 ml-10">
                        <img className='object-cover rounded-lg shadow-md' alt="decorative" src="https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2Fmiraflores.jpg?alt=media&token=8124b70d-87cd-44de-ace9-851fa1a7fea1"></img>
                    </div>
                </div>

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
                <div className="text-center">
                    <div className="mt-5 ml-10">
                        <img className='object-cover rounded-lg shadow-md' alt="decorative" src='https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2Fse%C3%B1ora.jpg?alt=media&token=75329952-13ec-4aaf-ad28-5cf896b604a3' />
                    </div>
                </div>

                <div className="">
                    <span></span>
                    <h2 className="uppercase text-red-700 text-2xl">instalación térmica</h2>
                    <div>
                        <p className="text-justify">
                            La moderna tecnología del sistema de instalación térmica,
                            permite obtener una calefacción en los ambientes de la edificación,
                            utilizando la radiación del sol, que por medio de la emisión, propagación y
                            transferencia de energia en forma de ondas electromagnéticas o partículas, que proporciona calor;
                            el cual viene transferida al fluido vector, esta energia incrementa el calor
                            del fluido al interno de las tuberias.
                            El incremento de temperatura del fluido vector es transmitido a los
                            ambientes requeridos por medio de los escambiadores de calor,
                            utilizando la convección y radiación para transferir calor.
                            Nuestro sistema de instalación térmica, se integra
                            perfectamente con las envolventes de la edificación; otorgando
                            como resultado el comfort térmico deseado, con temperaturas comprendidas 
                            entre 20°C y 25°C con una humedad relativa entre 40% y 60%; siendo estos los
                            parametros para un correcto ambiente comfortable, según el organismo internacional ASHRAE.
                        </p>
                    </div>
                    <div className="text-center">
                    <button 
                        onClick={handleDownload}
                        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        disabled={downloading}
                    >
                        {downloading ? 'Descargando...' : 'Descargar archivo Word'}
                    </button>
                    </div>
                </div>
                <div>
                    <div className="mt-5 ml-10">
                        <img className='object-cover rounded-lg shadow-md instalation' alt="decorative" src="https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FinstalacionTermica.jpg?alt=media&token=ceb27a0e-c49c-4089-87f6-2f0c7f105d3b"></img>
                    </div>
                </div>
                {/* <div className="text-center">6</div> */}
                
            </div>
            <Footer/>
           
        </div>
    )
}
