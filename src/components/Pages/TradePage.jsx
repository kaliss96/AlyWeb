import React, { Fragment, useCallback } from "react";
import "./SectionPage.css";
import SectionTrade from "../Trade/SectionTrade";
import ExecutivePages from "./ExecutivePages";
import WithdrawalPages from "./WithdrawalPages";

const TradePage = () => {
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
            Comercios
          </a>
          <span className="section-tags" id="dos"/>
          <a href="#dos" className="">
            Ejecutivos
          </a>

        <div id="pnl_1">
          <div>
            <p className="title-1">Listado de comercios</p>
            <SectionTrade />
          </div>
        </div>
        <div id="pnl_2">
          <div className="tittle-money">
            <div>
              <p className="title-1">Registro de ganancias</p>
            </div>
            <div>
              <button
                className="btn btn-success btn-block my-2"
                type="submit"
              >
                Retirar
              </button>
            </div>
          </div>
          <ExecutivePages />
          <br />
          <p className="title-1">Historial de retiros</p>
          <WithdrawalPages />
          </div>
        </div>
    </section>
    </Fragment>
    );
};

export default TradePage;
