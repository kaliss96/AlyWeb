import React, { Fragment } from "react";
import "./money.css";
import "./rpstrans.css";
import alyCoin from "../../assets/alyCoin.png";
import WithdrawFounds from "./WithdrawFounds";

const SendMoney = () => {
  return (
    <>
      <div className="rps-send">
        <div className="container-flex-money-text">
          <div className="cont-text-bal">
            <label className="title-send">Enviar Fondos</label>
          </div>
          <div className="container-flex-money">
            <div className="img-send">
              <img className="cod-qr" src={alyCoin} alt="img-coin" />
            </div>
            <div className="cont-mark-bal">
              <div className="description-send">
                <div className="img-container-send">
                  <img src={alyCoin} className="icon-send" alt="img-coin" />
                  <label type="text" className="img-label-send">
                    Alycoin
                  </label>
                </div>
                <div>
                  <p className="text-title-money">Precio del mercado</p>
                  <p className="text-content-money">$ 1.00</p>
                </div>
                <div>
                  <p className="text-title-money">Balance</p>
                  <p className="text-content-money">530,000.00 ALY</p>
                </div>
                <div>
                  <p className="text-title-money">Balance USD</p>
                  <p className="text-content-money">$ 530,000.00</p>
                </div>
              </div>
              <div className="address-wallet-money">
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

                <div className="style-mont-money">
                  <div className="mont-aly">
                    <p type="text" className="title-size-money">
                      Monto (BTC)
                    </p>
                    <div className="group">
                      <input
                        type="text"
                        className="form-input"
                        name="mont-usd"
                        id="mont-usd"
                        placeholder="0.00"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="cant-usd">
                    <p type="text" className="title-size-money">
                      Monto (USD)
                    </p>
                    <div className="group">
                      <input
                        type="text"
                        className="form-input"
                        name="mont-usd"
                        id="mont-usd"
                        placeholder="0.00"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="btn-send">
                    <button
                      className="btn btn-success btn-block my-2"
                      type="submit"
                    >
                      Siguiente
                    </button>
                  </div>
                  <div className="botonera-sends">
                    <div className="">
                      <button className="btn-send-resp" type="button">Retirar Fondos</button>
                    </div>
                    <div className="btn-ext-resp">
                      <button
                        className="btn btn-success btn-block my-2"
                        type="submit"
                      >
                        Siguiente
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <hr/>
      <WithdrawFounds />
    </>
  );
};

export default SendMoney;
