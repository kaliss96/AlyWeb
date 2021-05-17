import React, { Fragment,useState } from "react";
import { MdContentCopy } from "react-icons/md";
import "./RechargeWallet.css";
import copy from "copy-to-clipboard"; 
//agregado para notificacion toast
import Toast from "../../components/Toast/Toast"
import checkIcon from '../../components/Toast/icons/check.svg';
import errorIcon from '../../components/Toast/icons/error.svg';
import infoIcon from '../../components/Toast/icons/info.svg';
import warningIcon from '../../components/Toast/icons/warning.svg';
//fin notificacion toast
const RechargeWallet = () => {
  
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
 
const r = React.useRef(null);
  
  
  return (
    
  <Fragment>
    <div className="cont-text-bal">
      <label className="title-recharge">Recargar Billetera</label>
    </div>

    <div className="cont-hash">
      <div className="address-wallet-recv">
        <p type="text" className="title-size">
          Dirección de la billetera
        </p>
      </div>
      <div className="hash-wallet-recharge" onClick={copyToClipboard}>
        <label className="wall-adress-recharge"  ref={r}>HDY93OMFKDHDG8JGGLSBXNZWAY75N623DJJD0</label>
        <i className="icon-bills-recharge">
          <MdContentCopy />
          <span className="tooltiptextrcg">Copiar hash</span>
        </i>
      </div>
    </div>

    <div className="cant-style">
      <div className="style-cant-aly">
        <p type="text" className="title-size">
          Cantidad (ALY)
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

      <div className="style-cant-us">
        <p type="text" className="title-size">
          Cantidad (USD)
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

      <div className="style-hash-rech">
        <p type="text" className="title-size">
        Hash de la transaccion
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
    </div>

    <div className="btn-conf-wall-rps">
      <button 
        className="copy-address-wall"
        type="submit">COPIAR DIRECCION
      </button>

      <button
        className="recharg-address-wall"
        type="submit"
      >
        RECARGAR BILLETERA
      </button>
    </div>

    <div className="btn-conf-wall">
      <button
        className="btn btn-success btn-block my-2"
        type="submit"
      >
        Confirmar
      </button>
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

export default RechargeWallet;
