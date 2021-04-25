import React, { Fragment, useCallback } from "react";
import TransactionPages from "./TransactionPages";
import ReceiveFounds from "../Transactions/ReceiveTransaction.jsx";
import RechargeWallet from "../Transactions/RechargeWallet.jsx";
import "./SectionPage.css";
import SendMoney from "../Sends/send-money.view";

const SectionTab = () => {
  const aRefClick = useCallback(node => {
    if (node !== null) {
    node.click();
  }
}, []);

  return (
    <Fragment>
      <section className="section-main">
        <div className="tabs">
          <span className="section-tags" id="uno"/>
          <a   href="#uno" ref={aRefClick} className="">
            Historial
          </a>
          <span className="section-tags" id="dos"/>
          <a href="#dos" className="">
            Recibir
          </a>
          <span className="section-tags" id="tres"/>
          <a href="#tres" className="">
            Enviar
          </a>

          <div id="pnl_1">
            <div>
              <p className="title-1">Historial de transacciones</p>
                <TransactionPages />
            </div>
          </div>
          <div id="pnl_2">
            <ReceiveFounds />
            <hr/>
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

export default SectionTab;
