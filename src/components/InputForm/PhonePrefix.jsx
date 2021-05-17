import React  from "react"
import './PhonePrefix.css';
import { countryList } from '../../data/country.util';

const PhonePrefix = ({errors={},country, handleNumber, handleChange, handleRef, label, type, ...other  }) => {

    const handleChangeUserName=(e)=>{
        if(e.charCode >= 48 && e.charCode <= 57){
            console.log("esvalido")
            return true;
        }else {
            e.preventDefault();
        }
    }

    return (
        <div className="form-row">
            <div className="form-group select">
                <label className="prefijo-label">
                    Prefijo
                </label>

                <div className="group">
                    <select id="inputState" ref={handleRef} onChange={handleChange} className="form-input">
                        <option>+(000)</option>
                        {countryList.map((item, index) => {
                            if (country === item.value)
                                return <option key={`op${index}`} value={`(${item.phonecode})`} selected> {`(${item.phonecode})`}</option>;
                            else
                                return <option key={`op${index}`} value={`(${item.phonecode})`}> {`(${item.phonecode})`}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="form-group telefono">
                <label className="prefijo-label" type="text">
                    Teléfono
                </label>
                <div className='group'>
                    <input
                        pattern="^-?[0-9]\d*\.?\d*$"
                        type='text'
                        className ="form-input"
                        name='telefono'
                        id='telefono'
                        onKeyPress={handleNumber}
                        onChange={handleChangeUserName}
                        autoComplete="off"
                        placeholder='0000-0000'
                    />
                </div>
                {errors.nombre && (
                <label className="error-label">
                    {errors.nombre.message}
                </label>
                )}
            </div>

        </div>
    )
}

export default PhonePrefix;