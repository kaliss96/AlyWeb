import React from 'react';
import ComponentImage from "../components/image.component";
import CustomLabel from "../components/label.component";

// Import assets
import alyCoin from '../assets/alyCoin.png';
import Balance from './balance.component';
import AdressesWallet from './addresses-wallet.component';

export default function SendFounds() {

return (
  <div>
    <div className="container-flex-balance-text">
      <div className="cont-text-bal">
        <CustomLabel type="text" className="text-wallets">Recibir Fondos</CustomLabel>
      </div>
      <div className="container-flex-balance">
        <div className="img-receive">
          <ComponentImage src={alyCoin} alt="img-coin" />
        </div>
        <div className="botonera-coins">
          <div className="cont-types-coins">
            <div>
              <ComponentImage src={alyCoin} className="img_dash" alt="img-coin" />
              <CustomLabel type="text" className="text-aly">Alycoin</CustomLabel>
            </div>
              <div className="money-styles">
              <p className="textTitleBal">Precio del mercado</p>
              <p className="textContentBal">$ 1.00</p>
            </div>
            <div>
              <p className="textTitleBal">Balance</p>
              <p className="textContentBal">530,000.00 ALY</p>
            </div>
            <div>
              <p className="textTitleBal">Balance USD</p>
              <p className="textContentBal">$ 530,000.00</p>
            </div>
          </div>
          <div className="bills">
            <div className="found-wallet">
              <div className="found-wallet-one">
                <label type="text" className="tittle-wallet">
                  Direccion de la billetera
                </label>
                <div className="group-addresses">
                  <input
                    type="text"
                    className="form-input"
                    name="username"
                    id="username"
                    placeholder="YCaBUbg3bCKxxWMkV0iRz7EbsFJf"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="found-wallet-twoo"></div>
              <div className="found-wallet-three"></div>
            </div>
            
            <div className="mountain-styles">
              <div className="amount-btc">
                <label type="text" className="tittle-wallet">
                  Monto (BTC)
                </label>
                <div className="group-addresses">
                  <input
                    type="text"
                    className="form-input"
                    name="username"
                    id="username"
                    placeholder="0.00"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="amount-usd">
                <label type="text" className="tittle-wallet">
                  Monto (USD)
                </label>

                <div className="group-addresses">
                  <input
                    type="text"
                    className="form-input"
                    name="username"
                    id="username"
                    placeholder="0.00"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="amount-botton">
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
  )
}