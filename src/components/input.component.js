// form-input.component.js
import React, { useState } from 'react';

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
    
const FormInput = ({ handleChange, label, type, ...other  }) => {
const [showPassword, setShowPassword] = useState(false)
	console.log("civiris other.value ",other.value);
    return (

    <div className='group'>
        <input type={type==='password' && showPassword ? 'text' : type} onChange={handleChange} {...other}  
            />
        {
            label ?
                (<label className={`${other.value!=null ? (other.value.length > 0 ? 'shrink' : '') : ''} form-input-label`}>
                    {label}
                </label>)
                : null
        }
        {type === 'password' && <i onClick={()=>setShowPassword(!showPassword)}>
        {showPassword ? <VisibilityOff />:<Visibility />}
        </i>}
    </div>

)}

export default FormInput;
