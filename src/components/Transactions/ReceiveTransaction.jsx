import React, { Fragment } from "react";
import "./ReceiveTransaction.css";
import alyCoin from "../../assets/alyCoin.png";

const ReceiveFounds = () => {
  return (
    <>
      <div className="container-flex-receive">
        <div className="cont-text-receive">
          <label className="title-receive-money">Recibir Fondos</label>
        </div>
        <div className="container-receive-money">
          <div className="img-receive">
            <img className="cod-qr" src={alyCoin} alt="img-coin" />
          </div>
          <div className="cont-mark-bal">
            <div className="description-receive">
              <div className="img-container-receive">
                <img src={alyCoin} className="icon-receive" alt="img-coin" />
                <label type="text" className="img-label-receive">
                  Alycoin
                </label>
              </div>
              <div>
                <p className="title-receive-money">Precio del mercado</p>
                <p className="content-receive">$ 1.00</p>
              </div>
              <div>
                <p className="title-receive-money">Balance</p>
                <p className="content-receive">530,000.00 ALY</p>
              </div>
              <div>
                <p className="title-receive-money">Balance USD</p>
                <p className="content-receive">$ 530,000.00</p>
              </div>
            </div>
            <div className="address-wallet-receive">
              <p type="text" className="title-wallet-money">
                Direccion de la billetera
              </p>
              <input
                type="text"
                className="form-input"
                name="wall-address"
                id="wall-address"
                placeholder="2930JKKJ323223J2K3KJ23JKK2J3K2K3JK23"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiveFounds;
