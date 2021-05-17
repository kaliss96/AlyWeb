import React, { Fragment } from "react";
import "./Modal.css";

const Modal = ({ modalInfo, displayModal, closeModal }) => {
  const myStyle = {
    margin: "0.5rem auto",
  };

  const resumeStyle = {
    margin: "0.5rem auto",
    color: 'yellow'
  }

  const myModal = (
    <Fragment>
      <div className="mycard">
        <div className="mycard-header">Detalles de Transacción</div>
        <div className="mycard-body">
          <div className="content-details">
            <div className="left-details">
              <div>
                <h5 className="details-tittle" style={myStyle}>Descripción</h5>
                <p className="details-content">{modalInfo?.descripcion ? modalInfo.descripcion : null}</p>
              </div>
              <div>
                <h5 className="details-tittle" style={myStyle}>Fecha</h5>
                <p className="details-content">{modalInfo?.fecha ? modalInfo.fecha : null}</p>
              </div>
              <div>
                <h5 className="details-tittle" style={myStyle}> Monto de Transacción</h5>
                <div className="details-content">{modalInfo?.monto ? modalInfo.monto : null}</div>
              </div>
              <div>
                <h5 className="details-tittle" style={myStyle}>Moneda</h5>
                <p className="details-content">BTC</p>
              </div>
            </div>
            <div className="right-details">
              <div>
                <h5 className="details-tittle" style={myStyle}>Hash</h5>
                <p className="details-content">{modalInfo?.hash ? modalInfo.hash : null}</p>
              </div>
              <div>
                <h5 className="details-tittle" style={myStyle}>Hora</h5>
                <p className="details-content">{modalInfo?.hora ? modalInfo.hora : null}</p>
              </div>
              <div>
                <h5 className="details-tittle" style={myStyle}>Monto USD</h5>
                <p className="details-content">2356.23 USD</p>
              </div>
              <div>
                <h5 className="details-tittle" style={myStyle}>Fee USD</h5>
                <p className="details-content">23.56 USD</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mycard-footer">
          <div className="resume-transaction">
            <h5 className="details-tittle" style={resumeStyle}>Total USD <span className="amount">2145.56 USD</span></h5>
          </div>
        </div>
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
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="mymodal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeMyModal}>
          &times;
        </span>
        {modalInfo?.id ? myModal : null}
      </div>
    </div>
  );
};

export default Modal;
