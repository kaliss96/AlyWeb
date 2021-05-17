import React, { Fragment, useEffect, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import CustomQR from '../QR/QR.view';
import "./ReceiveTransaction.css";
import {connect} from 'react-redux'
import Floor from 'lodash/floor'
import copy from "copy-to-clipboard"; 
//agregado para notificacion toast
import Toast from "../../components/Toast/Toast"
import checkIcon from '../../components/Toast/icons/check.svg';
import errorIcon from '../../components/Toast/icons/error.svg';
import infoIcon from '../../components/Toast/icons/info.svg';
import warningIcon from '../../components/Toast/icons/warning.svg';
//fin notificacion toast
const mapStateToProps = state =>({
  currentWallet: state.wallets.currentWallet,
  wallets: state.wallets.wallets
})

const ReceiveFounds = ({currentWallet, wallets}) => {

  const [currWallet, setWallet] = useState([])
  const [info, setInfo] = useState([])
 	const [list, setList] = useState([]);
  const showToast = (type,message) => {

    const id = Math.floor((Math.random() * 101) + 1);
    let toastProperties = null;
    switch(type) {
      case 'success':
        toastProperties = {
        id,
        title: 'Success',
        description: message,
        backgroundColor: '#5cb85c',
        Color: 'black',
        icon: checkIcon
      }
      break;
        case 'danger':
          toastProperties = {
          id,
          title: 'Danger',
          description: message,
          backgroundColor: '#d9534f',
          icon: errorIcon
        }
        break;
        case 'info':
          toastProperties = {
          id,
          title: 'Info',
          description: message,
          backgroundColor: '#5bc0de',
          icon: infoIcon
        }
        break;
        case 'warning':
          toastProperties = {
          id,
          title: 'Warning',
          description: message,
          backgroundColor: '#f0ad4e',
          icon: warningIcon
        }
        break;

      default:
      setList([]);
    }
      setList([...list, toastProperties]);
    }

  const copyToClipboard = () => {
    copy(r.current.innerText);
    console.log("mostraremos ",r.current.innerText)
    showToast("success"," copiado\n"+r.current.innerText)
  }
  
  console.log('Wallets',info)
  console.log('Currency',currWallet)

  const r = React.useRef(null);
    useEffect(()=>{
    let wallet = wallets.filter(item => item.id === parseInt(currentWallet))
    setInfo(wallets)
    setWallet(wallet)
  },[currentWallet, wallets])

  return (
    <Fragment>
      <div className="container-flex-receive">
        <div className="cont-text-receive">
          <label className="title-receive-money">Recibir Fondos</label>
        </div>
        <div className="container-receive-money">
          <div className="img-receive">
            <CustomQR className="cod-qr"/>
          </div>
          <div className="cont-mark-bal">
            <div className="description-receive">
              <div className="img-container-receive">
                <img src={currWallet.length > 0 ? currWallet[0].img: null} className="icon-receive" alt="img-coin" />
                <label type="text" className="img-label-receive">
                  {currWallet.length > 0 ? currWallet[0].description: null}
                </label>
              </div>
              <div>
                <p className="letters-receive-money">Precio del mercado</p>
                <p className="content-receive">{currWallet.length > 0 ? Floor(currWallet[0].price,8) : null}</p>
              </div>
              <div>
                <p className="letters-receive-money">Balance</p>
                <p className="content-receive">{currWallet.length > 0 ? currWallet[0].amount : null}</p>
              </div>
              <div>
                <p className="letters-receive-money">Balance USD</p>
                <p className="content-receive">{currWallet.length > 0 ? Floor(currWallet[0].price *currWallet[0].amount,2) : null}</p>
              </div>
            </div>

            <div>
              <div className="address-wallet-receive">
                <p type="text" className="title-wallet-money">
                  Dirección de la billetera
                </p>
              </div>
              <div className="hash-wallet-receive" onClick={copyToClipboard}>
                <label className="wall-adress-receive" ref={r}>HDY93OMFKDHDG8JGGLSBXNZWAY75N623DJJD0</label>
                <i className="icon-bill-rec">
                  <MdContentCopy />
                  <span className="tooltiptext" >Copiar hash</span>
                </i>
              </div>
            </div>

          </div>
        </div>
      </div>
	  <Toast 
      toastList={list}
      position="top-right"
      autoDelete="true"
      dismissTime= "2500" 
    />
    </Fragment>
  );
};

export default connect(mapStateToProps,{})(ReceiveFounds);
