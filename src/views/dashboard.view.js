import React, { useRef } from "react";
import Balance from "../components/balance.component";
import ComponentImage from "../components/image.component";
import CustomLabel from "../components/label.component";
import Navbar from "../components/navbar.component";
import TableComponent from "../components/table.component";
import alyCoin from '../assets/alyCoin.png';
import SendFounds from "../components/send-founds.component";
import AlyCoins from "../components/aly-coins.component";

const Dashboard = () => {

  return (
   <>
    <Navbar
      type="text"
      placeholder="Buscar Hash"
      className="prompt"
      //ref={inputEl}
      //value={props.term}
      //onChange={getSearchTerm}
    />
    <div className="flex-container">
      <div className="box">
        <AlyCoins />
      </div>
      <div className="box-1">
        <section id="main">
          <div id="tabs">
            <span className="tags" id="uno" />
              <a href="#uno" className="tab-e">
                Historial
              </a>
            <span className="tags" id="dos" />
              <a href="#dos" className="tab-e">Recibir</a>
            <span className="tags" id="tres" />
              <a href="#tres" className="tab-e">Enviar</a>

            <div id="pnl_1">
              <div>
                <CustomLabel type="text" className="text-wallets">Historial de transacciones</CustomLabel>
                <TableComponent />
              </div>
            </div>
            <div id="pnl_2">
              <div className="container-balance">
                <CustomLabel type="text" className="text-wallets">Enviar Fondos</CustomLabel>
                <div className="img-fondos">
                  <ComponentImage src={alyCoin} alt="img-coin" />
                </div>
                <div className="style-balance">
                  <Balance />
                </div>
              </div>
            </div>
            <div id="pnl_3">
              <SendFounds />
            </div>
          </div>
        </section>
        
      </div>
    </div>

    <div>
     
      <div id="miModalTran" className="modal">
        <div className="modal-contenido">
          <a href="#">X</a>
          <p className="tittle-modal">Detalles de Transaccion</p>
          <div class="container-modal">
            <div className="content-one">
              <p className="textTitle">Descripcion</p>
              <p className="textContent">Transaccion</p>
              <br></br>
              <p className="textTitle">Fecha</p>
              <p className="textContent">Transaccion</p>
              <br></br>
              <p className="textTitle">Monto de transaccion</p>
              <p className="textContent">Transaccion</p>
              <br></br>
              <p className="textTitle">Moneda</p>
              <p className="textContent">Transaccion</p>
            </div>
            <div className="content-twoo">
              <p className="textTitle">Hash</p>
              <p className="textContent">Transaccion</p>
              <br></br>
              <p className="textTitle">Moneda</p>
              <p className="textContent">Transaccion</p>
              <br></br>
              <p className="textTitle">Monto USD</p>
              <p className="textContent">Transaccion</p>
              <br></br>
              <p className="textTitle">Fee USD</p>
              <p className="textContent">Transaccion</p>
            </div>
          </div>
          <footer className="card__footer">
            <br />
            <hr />
            <p className="textFootModal">Total USD</p>
          </footer>
        </div>  
      </div>
    </div>

</>
  );
};

export default Dashboard;
