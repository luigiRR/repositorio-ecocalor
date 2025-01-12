import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Slider from '../../components/Hero-Slider/Slider';
import TitleHead from '../../components/UI/TitleHead/TitleHead';
import Modals from '../../components/UI/Modal/Modals';
import Footer from '../../components/Footer/Footer';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <Slider />
            <TitleHead className="text-center px-4">
                desarrollamos sistemas orientados a la eficiencia de la energia termica
            </TitleHead>

            {/* Grid responsivo */}
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-8 mb-8">
                {/* Primera sección de texto */}
                <div className="p-4 lg:p-0">
                    <p className="pb-4 text-red-700 text-xl lg:text-2xl">
                        ¿Cuanta energía termica necesita una edificación?
                    </p>
                    <p className="text-justify text-sm md:text-base">
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

                {/* Imagen responsiva */}
                <div className="flex justify-center items-center mt-5 lg:mt-0">
                    <img
                        className="object-cover rounded-lg shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-auto"
                        alt="decorative"
                        src="https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2Fmiraflores.jpg?alt=media&token=8124b70d-87cd-44de-ace9-851fa1a7fea1"
                    />
                </div>

                {/* Segunda sección de texto */}
                <div className="p-4 lg:p-0">
                    <h2 className="uppercase text-red-700 text-xl lg:text-2xl">
                        el comfort termico
                    </h2>
                    <p className="text-justify pb-4 text-sm md:text-base">
                        Representa la opción del organismo humano de cambiar con el ambiente la
                        cantidad de calor necesaria para la función metabólica, a través
                        de una equilibrada relación entre los procesos de radiación,
                        convención y conducción, sudoración y respiración; los factores
                        que determinan el comfort térmico son muchos, pero los más
                        importantes son:
                    </p>
                    <Modals />
                </div>

                {/* Segunda imagen responsiva */}
                <div className="flex justify-center items-center mt-5 lg:mt-0">
                    <img
                        className="object-cover rounded-lg shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-auto"
                        alt="decorative"
                        src="https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2Fse%C3%B1ora.jpg?alt=media&token=75329952-13ec-4aaf-ad28-5cf896b604a3"
                    />
                </div>

                {/* Tercera sección de texto */}
                <div className="p-4 lg:p-0">
                    <h2 className="uppercase text-red-700 text-xl lg:text-2xl">
                        instalación térmica
                    </h2>
                    <p className="text-justify text-sm md:text-base">
                        La moderna tecnología del sistema de instalación térmica,
                        permite obtener una calefacción en los ambientes de la edificación,
                        utilizando la radiación del sol...
                    </p>
                </div>

                {/* Tercera imagen responsiva */}
                <div className="flex justify-center items-center mt-5 lg:mt-0">
                    <img
                        className='object-cover rounded-lg shadow-md instalation' 
                        alt="decorative"
                        src="https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FinstalacionTermica.jpg?alt=media&token=ceb27a0e-c49c-4089-87f6-2f0c7f105d3b"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}
