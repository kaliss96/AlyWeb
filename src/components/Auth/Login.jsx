import React  from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import InputPassword from '../InputForm/InputPassword';
import { redux_login,loadSpin } from '../../redux/actions/auth'

import img_logo from '../../assets/img_AlyPay.png';
import foot_logo from '../../assets/foot_alySystem.svg';
import './Login.css'

const Login = ({redux_login,loadSpin,msg,isLoading, history}) => {
    
    const { register, errors, handleSubmit } = useForm();

	const handleOnSubmit = (data, e) => {
        e.preventDefault()
        loadSpin(true);
        redux_login(data)
        history.push("/dashboard");
    }
	
	const handlechange = (e) => {
        loadSpin(false);
        e.preventDefault()
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
									onChange={handlechange}
                                    ref={register({ required: { value: true, message: "Email es requerido" },
                                   pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Correo con Formato Incorrecto"
								  }
								})}
                                    placeholder="Ingrese email aquí"
                                    autoComplete="off"
                                />

                                {errors.email && (
                                    <label className="error-label">
                                    {errors.email.message}
                                    </label>
                                )}
                            </div>
                        </div>
                            
                        <InputPassword
                            title='Contraseña'
                            name="password"
							placeholder=""
                            reference={register({
                                required: "Contraseña requerida",
                                minLength: {
                                    value: 6,
                                    message: "Su contraseña debera ser mayor de 5 caracteres"
                                }
                            })}
							change_event={handlechange}
                            errors={errors.password}
                        />
                        
                        <div className="button-container">
                            <Link className='signup-button' to='/register'>
                                REGISTRARSE
                            </Link>
							
                            <button disabled={isLoading} className="signin-button" type="submit">INICIAR SESIÓN</button>
                       
						</div>
						 <div className={`${isLoading === true?  'lds-ellipsis':'lds-ellipsis-out'}`} ><div></div><div></div><div></div><div></div></div>
						  <div className={`${msg !=null?  'alert':'lds-ellipsis-out'}`} >
                         {msg}
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



const mapStateToProps = state => ({
    msg: state.auth.msg,
    isLoading: state.auth.isLoading,
     
});

export default connect(mapStateToProps,{redux_login,loadSpin})(Login);