import React, { Fragment, useCallback, useEffect, useState } from "react";
import TransactionPages from "./TransactionPages";
import ReceiveFounds from "../Transactions/ReceiveTransaction.jsx";
import RechargeWallet from "../Transactions/RechargeWallet.jsx";
import SendMoney from "../Sends/send-money.view";
import img_wallets from '../../assets/alyCoin.png';
import "./SectionPage.css";
import HistoryPage from "./HistoryPage";
import Pagination from "../Transactions/Pagination";
import { HiUpload } from "react-icons/hi";
import {format} from 'date-fns'
import {connect} from 'react-redux'

const SectionTab = ({history_fr, wallets_fr, currentWallet_fr}) => {
  
  const [currentWallet, setCurrent] = useState([])

  const aRefClick = useCallback(node => {
    if (node !== null) {
      node.click();
    }
  }, []);

  useEffect(()=>{
    if(wallets_fr !== null && wallets_fr.length > 0){
      let curr = wallets_fr.filter(item=>item.id === parseInt(currentWallet_fr))
      setCurrent(curr)
    }
  },[wallets_fr, currentWallet_fr])

  const titles = ['#', 'Descripcion', 'Hash', 'Hora', 'Fecha', 'Monto'];
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const rows = history_fr !== null && history_fr !== undefined ? history_fr.map(item => {
    return {
      "id": item.id,
      "descripcion": item.description,
      "hash": <p style={{textOverflow: 'ellipsis', whiteSpace: 'break-spaces', overflow: 'hidden', color: 'yellow', width: '400px'}}>{item.hash}</p>,
      "hora": format(new Date(item.date_create),'hh:mm:ss a'),
      "fecha": format(new Date(item.date_create),'dd/MM/yyyy'),
      "monto": <div style={{color: 'red'}}><i><HiUpload /></i>{item.amount}</div>
    }
  }): []

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTrans = rows.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <Fragment>
      <section className="section-main">
        <div className="col-1">
          <div className="sect-wallet-resp">
            <div className="content-left">
              <img className='img_wallets-resp' src={img_wallets}  alt="img-wallets"/>
            </div>
            <div className="content-center">
              <p className="tittle-aly-rps color-bold-rps caption">AlyCoin</p>
              <p className="letters-aly-wallet-rps letters-aly-rps precio-mercado">Precio del mercado</p>
              <p className="color-bold-rps caption">$ 1.00</p>
            </div>
            <div className="content-rigth">
              <p className="letters-balance-rps caption">Balance</p>
              <p className="color-bold-rps caption">53,000.000 ALY</p>
              <p className="letters-balance-wallet-rps letters-balance-rps caption">Balance USD</p>
              <p className="color-bold-rps caption">$ 530,000.000</p>
            </div>
          </div>
        </div>
        <div className="tabs">
          <span className="section-tags" id="uno" />
          <a href="#uno" ref={aRefClick} className="">
            Historial
          </a>
          <span className="section-tags" id="dos" />
          <a href="#dos" className="">
            Recibir
          </a>
          <span className="section-tags" id="tres" />
          <a href="#tres" className="">
            Enviar
          </a>

          <div id="pnl_1">
            <div className="rps-tra">
              <p className="title-1">Historial de transacciones {currentWallet.length >0 ? currentWallet[0].description: null }</p>
              <TransactionPages  className={`testtable`} />
            </div>
            <div className="rps-history">
              <p className="title-1">Historial de transacciones</p>
              <HistoryPage rows={currentTrans} titles={titles} />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={rows.length}
                paginate={paginate}
              />
            </div>
          </div>
          <div id="pnl_2">
            <ReceiveFounds />

            <RechargeWallet />
          </div>
          <div id="pnl_3">
            <SendMoney />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const mapStateToProps = state =>({
  wallets_fr: state.wallets.wallets, 
  currentWallet_fr: state.wallets.currentWallet, 
  history_fr: state.wallets.history
})

export default connect(mapStateToProps)(SectionTab);
