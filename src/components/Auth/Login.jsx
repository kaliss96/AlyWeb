import React, {useState} from 'react';

import img_logo from '../../assets/img_AlyPay.png';
import foot_logo from '../../assets/foot_alySystem.svg';

import {Link} from 'react-router-dom';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useForm } from "react-hook-form";
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, errors, handleSubmit } = useForm();
    
    const toglePassword = (e) => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='sign-in-wrapper'>
            <div className='sign-in'>
                <div className="containerInputs">
                    <img className='responsive_img_logo' src={img_logo} alt='logo'/>
                    <label className="label-form">Iniciar Sesión</label>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label type="text" className="label-field">
                                Correo Electrónico:
                            </label>
                            <div className="group">
                                <input
                                    type="email"
                                    className="form-input-login"
                                    name="email"
                                    id="email"
                                    ref={register({ required: true, max: 10 })}
                                    placeholder="Ingrese correo aqui"
                                    autoComplete="off"
                                />

                                {errors.email && (
                                    <label className="error-label">
                                    Correo es requerido
                                    </label>
                                )}
                            </div>
                        </div>
                            
                        <div className="form-group">
                            <label type="text" className="custom-label">
                                Contraseña
                            </label>

                            <div className="group">
                                <input
                                    type={!showPassword ? "password" : "text"}
                                    name="password"
                                    id="password"
                                    className="form-input-login"
                                    autoComplete="off"
                                    // placeholder="Ingrese Contraseña Aqui"
                                    ref={register({
                                    required: "You must specify a password",
                                    minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                    }
                                })}
                                />
                                {
                                    <i onClick={toglePassword}>
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
                        
                        <div className="button-container">
                            <Link className='signup-button' to='/register'>
                                Registrarme
                            </Link>
                            <button className="signin-button" type="button">Iniciar Sesión</button>
                        </div>
                    </form>
                </div>
                <div className="container_img_foot">
                    <div className="responsive_img_foot">
                        <img src={foot_logo} alt='foot-logo'/>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login;