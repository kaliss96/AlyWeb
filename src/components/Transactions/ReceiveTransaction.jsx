import React from "react";
import "./ReceiveTransaction.css";

import alyCoin from "../../assets/alyCoin.png";
import { MdContentCopy } from "react-icons/md";

const ReceiveFounds = () => {
  return (
    <div className="container-flex-balance-text">
        <div className="cont-text-bal">
          <label className="title-receive">Recibir Fondos</label>
        </div>
        <div className="container-flex-balance">
          <div className="img-receive">
            <img src={alyCoin} alt="img-coin" />
          </div>
          <div className="">
            <div className="description-receive">
              <div className="img-container">
                <img src={alyCoin} className="img-receive" alt="img-coin" />
                <label type="text" className="img-label-receive">
                  Alycoin
                </label>
              </div>
              <div>
                <p className="text-title-balance">Precio del mercado</p>
                <p className="text-content-balance">$ 1.00</p>
              </div>
              <div>
                <p className="text-title-balance">Balance</p>
                <p className="text-content-balance">530,000.00 ALY</p>
              </div>
              <div>
                <p className="text-title-balance">Balance USD</p>
                <p className="text-content-balance">$ 530,000.00</p>
              </div>
            </div>
            <div className="address-wallet">
              <p type="text" className="title-wallet">
                Direccion de la billetera
              </p>
              <label htmlFor="">2930JKKJ3UADF5G2KJ23JKK2J3K2K388HYR4</label>
              <i><MdContentCopy /></i>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ReceiveFounds;
