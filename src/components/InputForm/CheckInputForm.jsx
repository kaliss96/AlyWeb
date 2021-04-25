import React from 'react'
import './CheckInputForm.css'
const CheckInputForm = () => {
    return (
        <div className="form-group">
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value="opt1"
                />
                <label className="form-check-label" type="text">
                   <span className="terms-cond">Acepto los</span> Terminos y Condiciones
                </label>
            </div>
            <button
                className="btn btn-block my-2"
                type="submit"
            >
                Siguiente
            </button>
        </div>
    )
}

export default CheckInputForm;