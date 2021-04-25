import React, { useState } from 'react'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import './InputPassword.css'

const InputPassword = ({ reference, errors, title, name, placeholder}) => {
    
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="form-group">
            <label type="text" className="input-label">
                {title}
            </label>
            <div className="group">
                <input
                    type={!showPassword ? 'password': 'text'}
                    name={name}
                    id={name}
                    className="form-input"
                    autoComplete="off"
                    placeholder={placeholder}
                    ref={reference}
                />
                {
                    <i onClick={() => setShowPassword(!showPassword)}>
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </i>
                }
                {errors.password && (
                    <label className="error-label">
                        {errors.password.message}
                    </label>
                )}
            </div>
        </div>
    )
}

export default InputPassword;