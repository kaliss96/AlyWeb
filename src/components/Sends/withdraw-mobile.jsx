import React, { Fragment } from "react";
import "./withdraw-mobile.css";

const WithdrawMobile = () => {
return (
  <Fragment>

    <div className="cont-mark-bal-withd">       
      <div className="address-wallet-mobile">
        <p type="text" className="title-wallet-mobile">
          Dirección de la billetera
        </p>
        <input
          type="text"
          className="form-input"
          name="wall-address-mob"
          id="wall-address-mob"
          placeholder="2930JKKJ323223J2K3KJ23JKK2J3K2K3JK23"
          autoComplete="off"
        />

        <div className="style-mont-mobile">
          <div className="mont-aly-mbl">
            <p type="text" className="title-size-mobile">
              Monto (BTC)
            </p>
            <div className="group">
              <input
                type="number"
                pattern="[0-9]*"
                className="form-input"
                name="mont-usd-mbl"
                id="mont-usd-mbl"
                placeholder="0.00"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="cant-usd-mbl">
            <p type="text" className="title-size-mobile">
              Monto (USD) Aprox.
            </p>
            <label for="">0.00</label>
          </div>
          <div className="btn-withdraw">
            <button
              className="btn btn-success btn-block my-2"
              type="submit"
            >
              Retirar
            </button>
          </div>

        </div>
      </div>
    </div>
  </Fragment>
  );
};

export default WithdrawMobile;
