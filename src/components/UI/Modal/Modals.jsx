import { UseModal } from "../../../Hooks/UseModal";
import Modal from "./Modal"

const Modals = () => {
    const[isOpenModal1, openModal1, closeModal1] = UseModal(false);

    return (
        <div>
            <button onClick={openModal1}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
            >mas</button>
            <Modal  isOpen={isOpenModal1} 
                    closeModal={closeModal1}>
                <h3>factores :</h3>
                <div >
                    <li>Potenza metabólica del individuo</li>
                    <li>Resistencia térmica del indumento puesto</li>
                    <li>
                        Temperatura del aire al interno del perimetro de las envolventes
                    </li>
                    <li>
                        Humedad relativa al interno del perimetro de las envolventes
                    </li>
                    <li>
                        Temperatura media de las envolventes, que delimitan el espacio
                        requerido
                    </li>
                    <li>
                        Movimiento del aire, producto de la instalación adoptada al
                        interno del perimetro de las envolventes
                    </li>
                </div>
            </Modal>
        </div>
    )
}

export default Modals;


