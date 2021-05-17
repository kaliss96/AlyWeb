import React, { Fragment } from "react";
import "./ModalNext.css";
import { useHistory } from "react-router-dom";
import img_logo from '../../assets/img_AlyPay.png';
import img_user from '../../assets/img_usr.png';

const ModalNext = ({ modalInfo, displayModal, closeModal }) => {
  
  const history = useHistory();
  const myStyle = {
    margin: "0.5rem auto",
  };

  const resumeStyle = {
    margin: "0.5rem auto",
    color: 'yellow'
  } 
  const handlered =(e)=> {
    let path = `/`; 
    history.push(path);
  }
  

  const myModal = (
    <Fragment>
      <div className="modal-contenido-lg">
        <img className="rps_img_lg" src={img_logo} alt='logo-img' />
      </div>  

      <div className="mycard-text">Su cuenta ya esta casí lista</div>
      <div className="mycard-content">Hemos enviado un correo de activación para verificar que es usted</div>
      <div className="mycard-header-lg">
        <img className="rps_img_usr" src={img_user} alt='logo-img-usr' />
      </div>
      <div className="mycard-text">Gracias por registrarse con nosotros!</div>

        <div className="confirm-btns-lg">
          <button type="button" onClick={handlered} className="button confirm-button-lg"><span>Listo</span></button>
        </div>
    </Fragment>
  );

  const closeMyModal = (e) => {
    e.stopPropagation();
    closeModal();
  };

  const divStyle = {
    display: displayModal ? "block" : "none",
  };

  return (
    <div className="modal2" onClick={closeModal} style={divStyle}>
      <div className="mymodal-content-lg" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {modalInfo? myModal : null}
      </div>
    </div>
  );
};

export default ModalNext;
