import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import './CheckInputForm.css'
import Modal2 from '../Modal/Modal2.jsx';
import ModalNext from '../Modal/ModalNext.jsx';
import ModalNextRED from '../Modal/ModalNext_rojo.jsx';

const CheckInputForm = ({...props}) => {

    const [modal, setModal] = useState(false);
    const [modalNext, setModalNext] = useState(false);
    const [modalNextred, setModalNextred] = useState(false);
    const [modalInfo, setInfo] = useState(false);

    const selectModal = (info) => {
        setModal(!modal);
        setInfo(info);
    };

    const selectModalNext = (info) => {
        setModalNext(!modalNext);
        setInfo(info);
    };
	
	const selectModalNextred = (info) => {
        setModalNextred(!modalNextred);
        setInfo(info);
    };

    return (
        <Fragment>
            <div className="form-group">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="opt1"
                    />
                    <label className="form-check-label" type="text">
                        <span className="accept">Acepto los</span>
                        <span className="terms-cond">Términos y Condiciones</span>
                    </label>
                </div>
                <div className="ctn-back-rg">
                    <button type="button" className='signup-button' onClick={selectModal}>
                        Volver
                    </button>
					{/* <button type="button" className='signup-button' onClick={selectModalNextred}>
                        Rojo
                    </button> */}
                    <button
                        onClick={selectModalNext}
                        className="btn btn-block my-2"
                        type="submit"
                    >
                        Siguiente
                    </button>
                </div>
                
            </div>
            <Modal2
                displayModal={modal}
                modalInfo={modalInfo}
                closeModal={selectModal}
            />
            <ModalNext
                displayModal={modalNext}
                modalInfo={modalInfo}
                closeModal={selectModalNext}
            />
			
			<ModalNextRED
                displayModal={modalNextred}
                modalInfo={modalInfo}
                closeModal={selectModalNextred}
            />
        </Fragment>
    )
}

export default CheckInputForm;