import React, { useState } from 'react'
import Modal from 'react-modal';


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


export const CalendarModal = () => {
    
    const closeModal=()=>{
        setopen(false)
    }
    const [open, setopen] = useState(true)

    return (
        <Modal
          isOpen={open}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          closeTimeoutMS={200}
          className="modal"
          overlayClassName="modal-fondo"
        >

            holamudno
        </Modal>
    )
}
