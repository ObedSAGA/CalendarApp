import { useState } from "react";
import Modal from "react-modal";
import'../../styles.css';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true)

   const closeModal = () => {
       console.log('cerrando...');
       setIsOpen(false);
   }

  return (
    <Modal
      isOpen={isOpen}
    //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={300}
      className="modal"
      overlayClassName={"modal-fondo"}
    >
        <h1>Hola Mundo</h1>
        <hr/>
        <span>Esto es un modal</span>

    </Modal>
  );
};
