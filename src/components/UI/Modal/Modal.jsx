import './Modal.css'

const Modal = ({children, isOpen, closeModal}) => {
    const handleModalContainerClick = e => e.stopPropagation();
    return (
        <article className={`modal ${isOpen && "is-open"}`}
                 onClick={closeModal}>
            <div className="modal-container rounded-lg"
                 onClick={handleModalContainerClick}>
                <button onClick={closeModal} 
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded modal-close"
                >X</button>
                {children}
            </div>
        </article>
    )
}

export default Modal


