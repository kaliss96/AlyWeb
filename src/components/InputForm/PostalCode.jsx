import React, { useState }  from "react"
import './PostalCode.css';
import { countryList } from '../../data/country.util';

const PostalCode = ({errors={},handleChange, label, type, ...other}) => {
    

    return (
        <div className="form-row" id='postalcode'>
            <div className="form-group postal">
                <label className="prefijo-label" type="text">
                    Cod. Postal
                </label>
                <div className='group'>
                    <input
                        type='text'
                        className ="form-input"
                        name='postalcode'
                        id='postalcode'
                        autoComplete="off"
                        placeholder='####'
                    />
                </div>
                {errors.nombre && (
                <label className="error-label">
                    {errors.nombre.message}
                </label>
                )}
            </div>
            
            <div className="form-group pais">
                <label className="prefijo-label">
                    Pais
                </label>
                <div className="group">
                    <select id="pais" className="form-input text-center" onChange={handleChange} name="pais">
                        <option selected>Seleccione Pais...</option>
                        {countryList.map((item, index) => {
                        return <option key={`op${index}`}
                        data-phonecode={item.phonecode }
                        value={item.value}>  {item.value}</option>
                        })}
                    </select>
                </div>
            </div>

        </div>
    )
}

export default PostalCode;