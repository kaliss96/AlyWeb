import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import InputPassword from '../InputForm/InputPassword';
import { RDX_LOGIN } from '../../redux/actions/auth'

import img_logo from '../../assets/img_AlyPay.png';
import foot_logo from '../../assets/foot_alySystem.svg';
import './Login.css'

const Login = ({RDX_LOGIN,...others}) => {
    const { register, errors, handleSubmit } = useForm();
    
    const handleOnSubmit = (data, e) => {
        e.preventDefault()
        RDX_LOGIN(data)
		
		others.history.push("/Dashboard");
        window.location.reload();
    }

    return (
        <div className='sign-in-wrapper'>
            <div className='sign-in'>
                <div className="containerInputs">
                    <img className='responsive_img_logo' src={img_logo} alt='logo'/>
                    <label className="label-form">Iniciar Sesión</label>
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
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
                            
                        <InputPassword
                            title='Contraseña'
                            name="password"
                            reference={register({
                                required: "You must specify a password",
                                minLength: {
                                    value: 6,
                                    message: "Password must have at least 8 characters"
                                }
                            })}
                            errors={errors}
                        />
                        
                        <div className="button-container">
                            <Link className='signup-button' to='/register'>
                            Registrarme
                            </Link>
                            <button className="signin-button" type="submit">Iniciar Sesión</button>
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
export default connect(null,{RDX_LOGIN})(Login);