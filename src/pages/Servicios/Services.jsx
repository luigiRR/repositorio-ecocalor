import React from 'react'
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/Hero-Slider/Slider'
import Navigation from '../../components/Navigation/Navigation'
import TitleHead from '../../components/UI/TitleHead/TitleHead'

export default function Services() {
    return (
        <div>
            <Navigation/>
            <Slider/>
            <TitleHead>analizamos las necesidades energeticas termicas de las edificcaciones otorgando soluciones personalizadas</TitleHead>
            
            <div className="container grid grid-cols-2 gap-4">
                <div className="pt-4">
                    <h3 className="uppercase text-red-700 font-bold">estudio tecnico de los envolventes</h3>
                    <div>
                        <p className="text-justify">
                            Es la verifica de la resistencia térmica de la susperficie de los envolventes,
                            así como de sus componentes moleculares las culaes avitan el flujo de calor del ambiente 
                            interno al externo; 
                            para lo cual se realiza un estudio de la transmitanza, conductividad 
                            y conductancia de cada uno de los elemtos que conforman los envolventes de la edificación.
                        </p>
                        <br />
                
                        <h5 className="uppercase text-red-700 font-bold">verifica Glasser</h5>
                        <p className="text-justify">
                            El aire que circula al interior de las paredes de un edificio contiene una cantidad variable de vapor de agua, 
                            algunos materiales de
                            construcción tienen una alta afinidad con el agua al estado liquido
                            o vapor, por lo tanto los materilaes modifican su comportanmiento
                            de tal forma que alteran su servicios en durabilidad, resistencia estructural,
                            y resistencia térmica. El agua en los poros de los diversos materilaes de costruccion
                            pueden modificar el comportamiento térmico de una pared, porque aumentará el flujo
                            térmico por conducción.
                            El procedimiento para el calculo de verífica con el diagrama Glasser de una 
                            envolvente: 
                        </p>
                        <p className="text-justify">-definición de la condicion al contorno (temperatura interna, humedad relativa interna,
                            temperatura externa y humedad relativa externa).</p>
                        <p className="text-justify">-definición de las caracteristicas de los materilaes que constituyen la envolvente (espesor, 
                            conductividad, permiabilidad al paso del vapor).</p>
                        <p className="text-justify">-calculo de la transmitanza.</p>
                        <p >-calculo de la termperatura de la superficie interna.
                            Con el calculo de la transmitancia (Diagrama de Glasser) se verifica la causa de
                            formación de condensación en las envolventes. Estas podrán ser
                            identificadas por :</p>
                        <p className="text-justify">
                            -un elevado nivel de humedad relativa del aire interno del
                            ambiente de la edificación
                        </p>
                        <p className="text-justify">
                            -elevadas condiciones de temperatura y presión dentro de la edificación.
                             Por tal motivo se observa gotas de roció en las superficies de las mismas.
                        </p>
                        <br />

                        <h5 className="text-red-700 font-bold">
                            VAPOR DIFUSO POR UNIDAD DE SUPERFICIE
                        </h5>
                        <p className="text-justify">
                            La ley de FICK. explica la portada de masa de vapor, que
                            atraviesa un material poroso, en una sola dirección, es
                            proporcional a la diferencia de presión parcial y al área de
                            la superficie, en la dirección normal a esa considerada, por
                            medio de un coeficiente del material llamado: coeficiente de
                            difusión o permeabilidad.
                        </p>
                        <br />

                        <h5 className="text-red-700 font-bold">
                            VERIFICA TERMOHIDROMEICA
                        </h5>
                        <h4>Puentes Termicos</h4>
                        <p className="text-justify">
                            Es una area determinada al interior de la edificación; sobre las superficie de las envolventes afectadas se localiza 
                            el mayor flujo de calor.
                            Verificandose los siguientes fenómenos:
                        </p>
                        <p className="text-justify">-Condensacion sobre la superficie</p>
                        <p className="text-justify">-Formación de mogo y algas</p>
                        <p className="text-justify">-Disminucion del confort térmico</p>
                        <p className="text-justify">-Daños a la superficie</p>
                        <br/>
                        <h5 className="text-red-700 font-bold">ANALISIS TERMOGRAFICO</h5>
                        <p className="text-justify">
                            El analisis termografico se realiza utilizando la termocamara la cual cacta la 
                            radiación del campo infrarojo y cumple medidas relacionadas con la emision de radiación,
                            este instrumento es en grado de cactar la temperatura de los cuerpos a travez de la medicion
                            de la intensidad de radiacion infraroja que emite el cuerpo en examen.
                            Todos los objetos a un temperatura superior al 0 absoluto emiten radiacion en el campo del infrarojo.
                            La termografia permite individuar las anomalias en la emision de la enegía de los 
                            cuerpos en análisis y por lo tanto determina la emisimidad de las anomalias térmicas. 
                            Los puentes térmicos, son una discontinuidad de la dispocision geometrica, unión de materiales de caracteristicas 
                            termicas diversas, y falta de isolamentos sobre las envolventes.
                            Estan situados en las zonas formadas por
                            ángulos, (0◦ a 360◦) de cualquier elemento construcctivo del
                            edificio, por ejemplo, en los nudos entre losas aligeradas y
                            las paredes, o entre columnas y las paredes, encuentros entre
                            pisos y paredes.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="mt-5 ml-16 ">
                        <img className='w-80 service object-cover rounded-lg shadow-md' alt="decorative" src='https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FImagen%20de%20WhatsApp%202024-08-31%20a%20las%2011.00.03_e83ce1bf.jpg?alt=media&token=ea5557e9-ecdb-4801-a436-c7220dd46fff'/>
                    </div>
                    <div className="mt-5 ml-16 ">
                        <img className='w-80 service object-cover rounded-lg shadow-md' alt="decorative" src='https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FImagen%20de%20WhatsApp%202024-08-31%20a%20las%2011.00.02_7dcc1f18.jpg?alt=media&token=b61cd637-4974-41df-8f0f-56d10a954064'/>
                    </div>
                </div>
                <div>
                    {/* DROPDOWN */}
                    <h3 className="uppercase text-2xl text-blue-700 font-bold">sistemas de calefaccion</h3> 
                    <span>BOTON PARA DESCARGAR DOC WORD</span>
                    <div className="pt-2">
                        <h5 className="">SEGUN EL CONSUMO DE SERVICIO</h5>
                        <div className="pl-10">
                            <li>GENERAL: sirve a dos o mas unidades edificables</li>
                            <li>LOCALIZADO: una sola edificación</li>
                        </div>
                        <br />

                        <h5 className="">SEGUN EL FLUIDO VECTOR</h5>
                        <div className="pl-10">
                            <li>AD AGUA: circulación NATURAL y circulación FORZADA</li>
                            <li>AD AIRE: circulación NATURAL y circulación FORZADA</li>
                        </div>
                        <br />
                        <div className="">
                            <h5 className="">SEGÚN EL PRINCIPIO DE DIFUSIÓN</h5>
                            <br />
                            <p className="">CALEFACCIÓN</p>
                            <div className="pl-10">
                                <li className="">
                                    <strong>Conducción:</strong> Transferimiento de energía que se
                                    verifica por efecto del movimiento de las partículas de una
                                    sustancia que tienen una mayor energía, en relación a aquellas
                                    adyacentes e inmobiles.
                                </li>
                                <br />
                                <li>
                                    <strong>Radiación:</strong> Es la energía emitida de una
                                    superficie, en forma de ondas electromagnéticas (o fotones), la
                                    transmisión del calor por radiación no necesita la presencia de
                                    un medio, para la realización de la misma
                                </li>
                                <br />
                                <li>
                                    <strong>Convección:</strong> Modalidad de transferimiento de
                                    energía térmica entre una superficie sólida y el fluido o gas
                                    adyacente que se encuentre en movimiento
                                </li>
                            </div>
                        </div>
                        <br />
                        <p className="estado">VENTILACIÓN</p>
                        <div className="pl-10">
                            <li>
                                <strong>Ventilación y deshumedecimiento:</strong> La humedad
                                absoluta del aire queda constante durante una simple
                                ventilación, pero la humedad relativa aumenta, si la humedad
                                relativa llega a niveles indeseados puede ser necesario remover
                                el vapor de agua presente en el aire, ósea deshumedecer.
                            </li>
                            <br />
                            <li>
                                <strong>Ventilación por evaporación:</strong> Se basa en un
                                principio simple que para evaporar el agua debe absorber el calor
                                latente de evaporación del agua misma, o del aire a su
                                alrededor, ambos el aire y el agua se enfrían durante el proceso
                                de evaporación.
                            </li>
                        </div>
                            <br></br>
                        <h5 className="">SEGÚN LA FUENTE</h5>
                        <p>
                            <strong>Sol, Aire, Agua y Vapor</strong>
                        </p>
                    </div>
                </div>
                <div>
                    <div className="mt-5 ml-16">
                        <img className='w-80 service1 object-cover rounded-lg shadow-md' alt="decorative" src='https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FImagen%20de%20WhatsApp%202024-08-31%20a%20las%2011.00.02_44d9ace4.jpg?alt=media&token=13bab4b0-0a68-4fed-ac1d-ccc53019dc8c'/>
                    </div>
                    <div className="mt-5 ml-16">
                        <img className='w-80 service1 object-cover rounded-lg shadow-md' alt="decorative" src='https://firebasestorage.googleapis.com/v0/b/supporttickets-cb452.appspot.com/o/ecocalor%2FImagen%20de%20WhatsApp%202024-08-31%20a%20las%2010.55.50_abc2537f.jpg?alt=media&token=0c054931-1402-475d-8cd4-8d3570650112'/>
                    </div>
                </div>
            </div>
        
            <Footer></Footer>
        </div>
    )
}
