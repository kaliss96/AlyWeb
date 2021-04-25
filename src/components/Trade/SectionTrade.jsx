import React, { Fragment, useCallback } from "react";
import "./TradePage.css";
import { FaJsfiddle } from 'react-icons/fa';
import logo_tether from '../../assets/logo-tether.png';

const SectionTrade = () => {

return (
    <Fragment>
      <div className="col-1">
        <div className="sect-trade">
          <div>
            <i className="icons-wall"><FaJsfiddle /></i>
          </div>
          <div>
            <p className="tittle-desc">Descripción de tienda</p>
            <hr />
            <p className="tittle-adr">Dirección</p>
            <p className="text-adr">De los semafaros del Club Terraza, 1 cuadra al sur, Managua Nicaragua</p>
          </div>
          <div>
            <img className='img_tether' src={logo_tether} />
            <p className="tittle-adr">Balance USD</p>
            <p className="text-adr">$ 350</p>
          </div>
        </div>
      </div>
    </Fragment>
    );
};

export default SectionTrade;
