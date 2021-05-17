import React, { Fragment } from "react";
import "./ModalNext_rojo.css";
import { useHistory } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const ModalNextRED = ({ modalInfo, displayModal, closeModal }) => {
  const myStyle = {
    margin: "0.5rem auto",
  };

  const resumeStyle = {
    margin: "0.5rem auto",
    color: 'yellow'
  }

  const history = useHistory();

  const handlered =()=> {
    let path = `/`; 
    history.push(path);
  }

  const closeMyModal = (e) => {
    e.preventDefault();
    closeModal();
  };

  const divStyle = {
    display: displayModal ? "block" : "none",
  };

  return (
    <div className="modal3" onClick={closeMyModal} style={divStyle}>
      <div className="modal-confirmation" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <h3>Confirmar</h3>
          <span  className="modal-action" onClick={closeMyModal} id="modal-close">
            <FaTimes/>
          </span>
        </div>

      <div className="modal-content">
        <p>Perdera sus registros ¿Salir?</p>
      </div>

      <div className="modal-buttons">
        <button
          onClick={closeMyModal}
          className="modal-button-no">No
        </button>
        <button 
          onClick={handlered}
          className="modal-button-yes">Si
        </button>
      </div> 
    </div>
  </div>
  );
};

export default ModalNextRED;
