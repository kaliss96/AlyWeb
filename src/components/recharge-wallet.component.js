import React from 'react';
import CustomLabel from "./label.component";

export default function RechargeWallet() {
	
	return (
        <div>
            <div className="cont-recharge">
                <div className="tittle-adress">
                    <CustomLabel type="text" className="text-wallets">Recargar Billetera</CustomLabel>
                </div>
            </div>
            <div className="cont-bills">
                <div className="recharge-bills-one">
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
                <div className="recharge-bills-twoo"></div>
            </div>
            <div className="cont-cant">
                <div className="cont-cant-one">
                    <label type="text" className="tittle-wallet">
                        Cantidad(AYL)
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
                <div className="cont-cant-twoo">
                    <label type="text" className="tittle-wallet">
                        Cantidad(USD)
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
                <div className="cont-cant-tree">
                    <label type="text" className="tittle-wallet">
                        Hash de la transaccion
                    </label>

                    <div className="group-addresses">
                        <input
                        type="text"
                        className="form-input"
                        name="username"
                        id="username"
                        placeholder="OvBAIDXygSzml5IdCWw1CvueCEYUKxJVBHjyDqNgtSbO"
                        autoComplete="off"
                        />
                    </div>
                </div>
            </div>
            <div className="btn-send-charg">
                <div className="btn-send-70"></div>
                <div className="btn-send-30">
                    <button
                        className="btn btn-success btn-block my-2"
                        type="submit"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
	)
}
