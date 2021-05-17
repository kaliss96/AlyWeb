import React, { Fragment } from "react";
import "./withdraw-money.css";

const WithdrawFounds = () => {
  return (
    <Fragment>
      <div className="cont-text-bal">
        <label className="title-recharge">Retirar Fondos</label>

        <div className="style-cant">
          <div>
            <p type="text" className="title-size">
              Dirección de la billetera
            </p>
            <div className="group">
              <input
                type="text"
                className="form-input"
                name="cant"
                id="cant"
                placeholder="2930JKKJ323223J2K3KJ23JKK2J3K2K3JK23"
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <p type="text" className="title-size">
              Monto (BTC)
            </p>
            <div className="group">
              <input
                type="number"
                pattern="[0-9]*"
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
                Monto (USD) aprox.
              </p>
              <label htmlFor="">0.00</label>
            </div>
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

export default WithdrawFounds;
