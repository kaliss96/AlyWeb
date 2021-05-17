import React, { Fragment, useState, useEffect } from "react";
import "./money.scss";
import "./rpstrans.css";
import userCoin from "../../assets/user_send.png";
import WithdrawFounds from "./WithdrawFounds";
import WithdrawMobile from "./withdraw-mobile";
import Floor from 'lodash/floor'

import {connect} from 'react-redux'
import {showLogo, hideLogo } from '../../redux/actions/images'

const mapToStateProps = state =>({
  currentWallet: state.wallets.currentWallet,
  wallets: state.wallets.wallets
})

const SendMoney = ({ showLogo, hideLogo, currentWallet, wallets, handleclick, statecomp }) => {

  const [amountCripto, setAmountCritpto] = useState(0.00)
  const [amountUSD, setAmountUSD] = useState(0.00)
  const [show, setShow] = useState(true);
  const [showBtn, setShowBtn] = useState(true);

  const [currWallet, setWallet] = useState([])

  //console.log('Preice', currWallet)

  useEffect(()=>{
    let wallet = wallets.filter(item => item.id === parseInt(currentWallet))
    setWallet(wallet)
  },[currentWallet, wallets])

  useEffect(()=>{
    return ()=>{
      hideLogo()
    }
  },[hideLogo])

  const showRetirement = () => {
    setShow(!show)
    showLogo(true)
  }

  const showClickBtn = () => {
    setShowBtn(!show)
  }
  
  const resetMount = () => {
    setAmountCritpto(0.00)
    setAmountUSD(0.00)
  }

  const handleKeyPressUSD = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
      let ac = document.getElementById("amountCripto").value;
      const amountCripto = (ac * 0.000018);
    }
  }

  const onChangeFractions = (value) => {
    //setAmountCritpto(value)
    // const newAmount = 
  }

  const secundary = (
    <div className="address-wallet-money">
      <p type="text" className="title-wallet-money">
        Dirección de la billetera
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
              type="number"
              pattern="[0-9]*"
              className="form-input"
              name="amountCripto"
              id="amountCripto"
              onChange={(e)=>setAmountCritpto(e.target.value)}
              value={amountCripto}
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
              type="number"
              pattern="[0-9]*"
              className="form-input"
              name="amountUSD"
              id="amountUSD"
              onChange={(e)=>setAmountUSD(e.target.value)}
              onKeyPress={handleKeyPressUSD}
              value={amountUSD}
              autoComplete="off"
            />
          </div>
        </div>

        {showBtn &&
          <div className="btn-send" onClick={showClickBtn}>
            <button
              type="button"
              className="btn btn-success btn-block my-2"
              onClick={() => {
                setShowBtn(!showBtn);
              }}
            >
              Siguiente
            </button>
          </div>}
        
        {!showBtn && <div className="btn-conf">
          <button className="btn btn-success btn-block my-2" type="submit">
            Confirmar
          </button>
        </div>}

        <div className="botonera-sends">
          <button className="btn-send-resp" onClick={showRetirement}>
            Retirar Fondos {show ? "hide" : "show"}
          </button>
          <button className="btn-ext-resp" type="submit">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>

      <div className="rps-send">
        <div className="container-flex-money-text">
          <div className="cont-text-bal-send">
            <div>
              <label className="title-send">Enviar Fondos</label>
            </div>
            <div>
              <button onClick={resetMount}>Reset</button>
            </div>
          </div>
          <div className="container-flex-money">
            <div className="img-send">
              <img className="sect-img" src={userCoin} alt="img-coin" />
              <p className="txt-name">@AlySystem</p>
              <p className="txt-city">Managua, Nicaragua</p>
            </div>
            <div className="cont-mark-bal-send">
              <div className="description-send">
                <div className="img-container-send">
                  <img src={currWallet.length > 0 ? currWallet[0].img: null} className="icon-send" alt="img-coin" />
                  <label type="text" className="img-label-send">
                    {currWallet.length > 0 ? currWallet[0].description: null}
                  </label>
                </div>
                <div>
                  <p className="text-title-money">Precio del mercado</p>
                  <p className="text-content-money">{currWallet.length > 0 ? Floor(currWallet[0].price,8) : null}</p>
                </div>
                <div>
                  <p className="text-title-money">Balance</p>
                  <p className="text-content-money">{currWallet.length > 0 ? currWallet[0].amount : null}</p>
                </div>
                <div>
                  <p className="text-title-money">Balance USD</p>
                  <p className="text-content-money">{currWallet.length > 0 ? Floor(currWallet[0].price *currWallet[0].amount,2) : null}</p>
                </div>
              </div>
              {show && secundary}
            </div>
          </div>
        </div>
      </div>

      <div className="rtr-funds-rsp">
        {!show && <WithdrawMobile /> }
      </div>
      <WithdrawFounds />
    </Fragment>
  );
};

//const mapToStateProps = state =>({})
export default connect(mapToStateProps,{showLogo, hideLogo})(SendMoney);
