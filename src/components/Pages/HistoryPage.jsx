import React, { Fragment, useState } from "react";
import "./history-page.css";
import { MdSearch as SearchIcon } from 'react-icons/md';
import Modal from "../Modal/Modal.jsx";
const HistoryPage = ({ rows }) => {

    const [modal, setModal] = useState(false);
    const [modalInfo, setInfo] = useState(false);

    const selectModal = (info) => {
        setModal(!modal);
        setInfo(info);
    };

    const selectElement = (row) => {
        selectModal(row);
    };

    const transactionDetails = rows.map((row, index) => (
        <div onClick={() => selectElement(row)} key={index}>
            <div>
                <div className="container-history">
                    <div className="txt-trans">
                        TRANSFERENCIA
                        </div>
                    <div className="txt-hash">
                        #{row.id}
                    </div>
                </div><hr />
            </div>
            <div className="container-box">
                <div className="txt-box-right">
                    <p>Descripcion: <span className="spn-white">{row.descripcion}</span></p>
                    <p>Hash: <span className="spn-white">{row.hash}</span></p>
                    <p>Hora: <span className="spn-white">{row.hora}</span></p>
                    <p>Fecha: <span className="spn-white">{row.fecha}</span></p>
                    Monto: <span className="spn-white">{row.monto}</span>
                </div>
            </div>
        </div>
    ))

   return (
        <Fragment>
            <div className="cont-search-rps">
                <div className='search-bar-hist'>
                    <input
                        type='text'
                        className='search-rps-bar__input'
                        placeholder="Buscar detalle de transaccion"
                    />
                    {/* <SearchIcon className='search-rps-bar__icon' size={32} /> */}
                </div>
                <div className="">
                    <SearchIcon className='search-rps-bar__icon' size={32} />
                </div>
            </div>
            
            { transactionDetails }

            <Modal
                displayModal={modal}
                modalInfo={modalInfo}
                closeModal={selectModal}
            />

        </Fragment>
    );
};

export default HistoryPage;
