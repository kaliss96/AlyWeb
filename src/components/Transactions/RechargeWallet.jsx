import React, { Fragment } from "react";
import { MdContentCopy } from "react-icons/md";
import "./RechargeWallet.css";

const RechargeWallet = () => {
  return (
    <Fragment>
      <div className="cont-text-bal">
        <label className="title-recharge">Recargar Billetera</label>
      </div>
      <div className="recharge-wallet">
        <p type="text" className="title-wallet">
          Direccion de la billetera
        </p>
        <label htmlFor="">2930JKKJ323223J2K3KJ23JKK2J3K2K3JK23</label>
        <i><MdContentCopy /></i>
      </div>

      <div className="style-cant">
        <div>
          <p type="text" className="title-size">
            Cantidad (ALY)
          </p>
          <div className="group">
            <input
              type="text"
              className="form-input"
              name="cant"
              id="cant"
              placeholder="0.00"
              autoComplete="off"
            />
          </div>
        </div>

        <div>
          <p type="text" className="title-size">
            Cantidad (USD)
          </p>
          <div className="group">
            <input
              type="text"
              className="form-input"
              name="cantus"
              id="cantus"
              placeholder="0.00"
              autoComplete="off"
            />
          </div>
        </div>

        <div>
          <div className="recharge-wallet">
            <p type="text" className="title-wallet">
              Hash de la transaccion
            </p>
            <label htmlFor="">2930JKKJ323223J2K3KJ23JKK2J3K2K3JK23</label>
          </div>
        </div>
      </div>
      <div className="btn-conf-wall">
        <button
          className="btn btn-success btn-block my-2"
          type="submit"
        >
          Confirmar
        </button>
      </div>
      
    </Fragment>
  );
};

export default RechargeWallet;
