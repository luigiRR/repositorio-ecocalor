import React from 'react'
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
                            componentes que evita el flujo de calor del ambiente interno al externo; para lo
                            cual se realiza un estudio de la transmitanza de cada uno de los elemtos que
                            conforman los envolventes de la edificación.
                        </p>
                        <br />
                
                        <h5 className="uppercase text-red-700">verifica termoigeometrica</h5>
                        <p className="text-justify">
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
                            medio de un coeficiente del material llamado, coeficiente de
                            difusión o permeabilidad.
                        </p>
                        <br />
                        <h5 className="text-red-700">PONTE TÉRMICO Y FLUJO DE CLAOR</h5>
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
                    <h3 className="uppercase text-2xl">sistemas de confort termico</h3>
                    <div className="pt-2">
                        <h5 className="">SEGÚN EL CONSUMO DE SERVICIO</h5>
                        <li>GENERAL: sirve a dos o mas unidades edificables</li>
                        <li>LOCALIZADO: una sola edificación</li>
                        <br />

                        <h5 className="">SEGÚN EL FLUIDO VECTOR</h5>
                        <li>AD AGUA: circulación NATURAL y circulación FORZADA</li>
                        <li>AD AIRE: circulación NATURAL y circulación FORZADA</li>
                        <br />
                        <div className="">
                            <h5 className="">SEGÚN EL PRINCIPIO DE DIFUSIÓN</h5>
                            <p className="">CALEFACCIÓN</p>
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
                        <br />
                        <p className="estado">VENTILACIÓN</p>
                        <br />
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
                            <br></br>
                        <h5 className="">SEGÚN LA FUENTE</h5>
                        <p>
                            <strong>Sol, Aire, Agua y Vapor</strong>
                        </p>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
