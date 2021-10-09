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
                    <h3 className="uppercase text-red-700">estudio tecnico de los envolventes</h3>
                    <div>
                        <p className="text-justify">
                            Es la verifica de la resistencia térmica de la susperficie de los envolventes,
                            así como de sus componentes moleculares las culaes avitan el flujo de calor del ambiente 
                            interno al externo; 
                            para lo cual se realiza un estudio de la transmitanza, conductividad 
                            y conductancia de cada uno de los elemtos que conforman los envolventes de la edificación.
                        </p>
                        <br />
                
                        <h5 className="uppercase text-red-700">verifica termoigrometrica</h5>
                        <p className="text-justify">
                            El aire que circula las paredes de un edificio contiene una 
                            una cantidad variable de vapor de agua, algunos materiales de
                            construcción tienen una alta afinidad con el agua al estado liquido
                            o de vapor, por lo tanto los materilaes modifican su comportanmiento
                            de tal forma que alteran su servicios en durabilidad, resistencia estructurale,
                            y resistencia térmica. El agua en los poros de los diversos materilaes de costrucciones
                            pueden modificar el comportamiento térmico de una pared, porque aumentará el flujo
                            térmico por conducción.
                            El procedimiento para el calculo de verífica termoigrometrica de una 
                            estructura: MODAL 
                            -definición de la condicion al contorno (temperatura interna, humedad relativa interna,
                            temperatura extera y humedad relativa externa).
                            -definición de las caracteristicas de los materilaes que constituyen la pared (espesor, 
                            conductividad, permiabilidad al paso del vapor).
                            -calculo de la transmitanza.
                            -calculo de la termperatura de la superficie interna.
                            A través del diagrama de GLASSER se verifica las causas de
                            formación de condensación en las envolventes. Estas podrán ser
                            identificadas por :
                        </p>
                        <p className="text-justify">
                            -un elevado nivel de humedad relativa del aire interno del
                            ambiente de la edificación
                        </p>
                        <p className="text-justify">
                            -elevadas condiciones de temperatura y presión dentro de la edificación.
                             Por tal motivo se observa gotas de roció en las superficies de las mismas.
                        </p>
                        <br />

                        <h5 className="text-red-700">
                            VAPOR DIFUSO POR UNIDAD DE SUPERFICIE
                        </h5>
                        <p className="text-justify">
                            La ley de FICK. explica que la portada de masa de vapor, que
                            atraviesa un material poroso, en una sola dirección, es
                            proporcional a la diferencia de presión parcial y al área de
                            la superficie, en la dirección normal a esa considerada, por
                            medio de un coeficiente del material llamado: coeficiente de
                            difusión o permeabilidad.
                        </p>
                        <br />
                        <h5 className="text-red-700">PONTE TERMICO Y FLUJO DE CLAOR</h5>
                        <p className="text-justify">
                            Los puentes térmicos, son una discontinuidad de los isolamentos térmicos
                            verificados en la correspondencia de los nudos estructurales;
                            estan situados en las zonas formadas por
                            ángulos, (0◦ a 360◦) de cualquier elemento construcctivo del
                            edificio, por ejemplo, en los nudos entre losas aligeradas y
                            las paredes, o entre columnas y las paredes, encuentros entre
                            pisos y paredes. El flujo de calor es una forma de energía que
                            se transfiere entre dos sistemas, esta puede ser mediante
                            conducción, convección y radiación.
                        </p>
                    </div>
                </div>
                <div></div>
                <div>
                    <h3 className="uppercase text-2xl text-blue-700">sistemas de comfort termico</h3>
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
               
            </div>
        
            <Footer></Footer>
        </div>
    )
}
