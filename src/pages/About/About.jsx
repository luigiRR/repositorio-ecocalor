import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Slider from '../../components/Hero-Slider/Slider';
import TitleHead from '../../components/UI/TitleHead/TitleHead';
import Footer from '../../components/Footer/Footer';

export default function About() {
    return (
        <div>
            <Navigation />
            <Slider />
            <TitleHead>
                realizamos progresos para el desarrollo del confort termico de calidad
            </TitleHead>

            <div className="container max-w-screen-lg mx-auto px-4 sm:px-6">
                <div>
                    <p className="text-justify pt-8 text-base sm:text-lg">
                        Somos un equipo de profesionales, comprometidos con los cambios
                        ambientales y climáticos en nuestro territorio, por tal motivo
                        desarrollamos sistemas integrales para las edificaciones privadas y públicas;
                        teniendo presente las exigencias y el beneficio principal de nuestros clientes; 
                        el ahorro se obtiene por la no creación de un recibo de energía eléctrica, 
                        siendo la inversión recuperada en un corto periodo de tiempo.
                    </p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    <div>
                        <h3 className="uppercase text-lg sm:text-xl text-blue-700 font-bold pt-5">
                            mision
                        </h3>
                        <p className="text-justify text-base sm:text-lg">
                            Innovación y desarrollo de soluciones energéticas ecológicas,
                            para las edificaciones en el territorio nacional, frente a los
                            cambios climáticos del nuevo milenio. Respetando el medio
                            ambiente.
                        </p>
                    </div>

                    <div>
                        <h3 className="uppercase text-lg sm:text-xl text-blue-700 font-bold pt-5">
                            vision
                        </h3>
                        <p className="text-justify text-base sm:text-lg">
                            Consolidar en el mercado de las edificaciones sea en la construcción 
                            y la comercialización, el factor climatológico, como nuevo punto
                            estratégico primordial; para el confort de los usuarios.
                        </p>
                    </div>

                    <div>
                        <h3 className="uppercase text-lg sm:text-xl text-blue-700 font-bold pt-5">
                            valores
                        </h3>
                        <p className="text-justify text-base sm:text-lg">
                            Ponemos a disposición todo aquello que nos representa como
                            empresa, nos comprometemos con nuestros clientes, utilizando los
                            puentes de: la sinceridad, credibilidad, responsabilidad, orden,
                            gentileza y desarrollo humano.
                        </p>
                    </div>
                </div>

                <div className="images-about my-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <div>
                        <img
                            className="h-64 w-full sm:w-80 object-cover rounded-lg shadow-md"
                            alt="decorative"
                            src="https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FImagen%20de%20WhatsApp%202024-08-31%20a%20las%2010.55.49_388b138c.jpg?alt=media&token=e229e8d4-2888-4c41-95f7-5ec0288b3602"
                        />
                    </div>
                    <div>
                        <img
                            className="h-64 w-full sm:w-80 object-cover rounded-lg shadow-md"
                            alt="decorative"
                            src="https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FImagen%20de%20WhatsApp%202024-08-31%20a%20las%2010.55.49_9ca824c5.jpg?alt=media&token=3692210c-58f6-425c-9203-9e04d279a32e"
                        />
                    </div>
                    <div>
                        <img
                            className="h-64 w-full sm:w-80 object-cover rounded-lg shadow-md"
                            alt="decorative"
                            src="https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FImagen%20de%20WhatsApp%202024-08-31%20a%20las%2010.55.51_5797e63c.jpg?alt=media&token=5ae7cf32-62c4-4a0d-aa27-6bcab97d86b3"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
