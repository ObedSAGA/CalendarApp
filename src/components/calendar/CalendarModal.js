import Modal from "react-modal";
import DateTimePicker from 'react-datetime-picker';
import moment from "moment";
import Swal from 'sweetalert2'

import "../../styles.css";
import { useState } from "react";

// ESTILOS PROPIOS DE REACT MODAL
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

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlusOne = now.clone().add(1, 'hours');

export const CalendarModal = () => {

  const [dateStart, setDateStart] = useState(now.toDate())
  const [dateEnd, setDateEnd] = useState(nowPlusOne.toDate())
  const [titleValid, setTitleValid] = useState(true)

  const [formValues, setFormValues] = useState({
      title: 'Evento',
      notes: '',
      start: now.toDate(),
      end: nowPlusOne.toDate(),
  });

  const {notes, title, start, end} = formValues;

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  }


  const closeModal = () => {
    //TODO: CERRAR EL MODAL
  };

  const handleStartDate = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e
    })
  }

  const handleEndtDate = (e) => {
    setDateEnd(e)
    setFormValues({
      ...formValues,
      end: e
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      Swal.fire('Error', 'La fecha fin debe ser mayor a la fecha de inicio', 'error');
      return;
    }

    if (title.trim().length < 2) {
      return setTitleValid(false);
    }

    // TODO: realizar grabación en DB

    setTitleValid(true);
    closeModal();
  }


  return (
    <Modal
      isOpen={true}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={300}
      className="modal"
      overlayClassName={"modal-fondo"}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form 
          className="container"
          onSubmit={handleSubmitForm}
      >
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker 
              onChange={handleStartDate} 
              value={dateStart}
              className="form-control" 
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker 
              onChange={handleEndtDate} 
              value={dateEnd}
              minDate={dateStart}
              className="form-control" 
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${!titleValid && 'is-invalid'}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
