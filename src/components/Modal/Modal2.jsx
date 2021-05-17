import React, { Fragment } from "react";
import "./Modal2.css";
import { useHistory } from "react-router-dom";

const Modal2 = ({ modalInfo, displayModal, closeModal }) => {
  
  const history = useHistory();

  const handlered =()=> {
    let path = `/`; 
    history.push(path);
  }

  const myModal = (
    <Fragment>
      <div className="modal-contenido">
        <h2>Esta a punto de salir</h2>
      </div>  

      <div className="mycard-header">Perdera sus registros ¿Salir?</div>
        <div className="confirm-btns">
          <button type="button" onClick={closeModal} className="button confirm-button">
          <span>Cancelar</span></button>
          <button type="button" onClick={handlered} className="button confirm-button"><span>Si</span></button>
        </div>
    </Fragment>
  );

  const divStyle = {
    display: displayModal ? "block" : "none",
  };

  return (
    <div className="modal2" onClick={closeModal} style={divStyle}>
      <div className="mymodal-cnt-bck" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {modalInfo ? myModal : null}
      </div>
    </div>
  );
};

export default Modal2;
