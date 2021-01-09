import React, { useState } from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root');

  const startDate = moment().minutes(0).seconds(0).add(1,"hours");
  const endDate =  moment().minutes(0).seconds(0).add(2, "hours");


export const CalendarModal = () => {

    const [dateStart, setDateStart] = useState(startDate.toDate());
    const [dateEnd, setDateEnd] = useState(endDate.toDate());

    const [formValues, setformValues] = useState({
        title: "evento",
        notes:"",
        start:startDate.toDate(),
        end:endDate.toDate()
    });
    const {notes,title} = formValues;

    const handleInputChange =({target})=>{
        setformValues({
            ...formValues,
            [target.name]:target.value
        });
    }
    
    const closeModal=()=>{
        
    }
    
    const handleStartDatechange =(e)=>{
       setDateStart(e);
       setformValues({
            ...formValues,
            start:e 
       });
    }

    const hanldeEndDateChange=(e)=>{
        setDateEnd(e);
        setformValues({
            ...formValues,
            end:e 
       });
    }

    const handleSubmitForm=(e)=>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <Modal
          isOpen={true}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          closeTimeoutMS={200}
          className="modal"
          overlayClassName="modal-fondo"
        >

<h1> Nuevo evento </h1>
<hr />
<form 
    className="container"
    onSubmit={ handleSubmitForm }
    >

    <div className="form-group">
        <label>Fecha y hora inicio</label>
        <DateTimePicker
        className="form-control"
            onChange={handleStartDatechange}
            value={dateStart}
        />        
    </div>

    <div className="form-group">
        <label>Fecha y hora fin</label>
        <DateTimePicker
        className="form-control"
            onChange={hanldeEndDateChange}
            minDate={dateStart}
            value={dateEnd}
        />  
    </div>

    <hr />
    <div className="form-group">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title }
            onChange={handleInputChange}
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes }
            onChange={handleInputChange}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>
        </Modal>
    )
}
