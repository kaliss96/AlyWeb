import React, { Fragment, useRef,useState } from "react";
import { useForm } from "react-hook-form";
import img_logo from '../../assets/img_AlyPay.png';
import foot_logo from '../../assets/foot_alySystem.svg';

import InputFormText from "../InputForm/InputFormText";
import PhonePrefix from "../InputForm/PhonePrefix";
import InputPassword from "../InputForm/InputPassword";
import PostalCode from "../InputForm/PostalCode";
import CheckInputForm from "../InputForm/CheckInputForm";

import './Register.css'

const Register = () => {

    const { register, errors, handleSubmit, watch } = useForm();
    const onsubmit = (data) => {
        console.log(data);
    };

	const [country, setCountry] = useState("");
    const [prefix, setPrefix] = useState("");

	const prefixChange = (event) => {
    var prefix_selected = event.target.options[event.target.selectedIndex].value;
        setPrefix(prefix_selected);
    }

    const countryChange = (event) => {
        //   setCountry(country);
        var country_selected = event.target.options[event.target.selectedIndex].value;
        setCountry(country_selected);
        //console.log("test ",phonecode);

        //si se agregan mas data-"llaves" en el option
        var dataset = event.target.options[event.target.selectedIndex].dataset;    
    }

    const handleKeyPress=(event)=>{
        if((event.charCode >=65 && event.charCode <=90)==true ||
            (event.charCode >=97 && event.charCode <=122)==true)
            return true;
        else
            event.preventDefault();
	} 

    //Solo permite introducir numeros.
    const handleOnlyNumbers=(event)=>{
        if (event.charCode >= 48 && event.charCode <= 57) 
            return true;
        else
            event.preventDefault();
    }

    const password = useRef({});
    password.current = watch("password", "");

    return (
        <Fragment>
            <div className="register-container">
                <div className="container-input-register">
                    <img className="responsive_img" src={img_logo} alt='logo-img' />
                    <label className="label-form" type="text">
                        Registro de usuario
                    </label>
                    <form className="rowed my-5 mx-5 px-3 py-3" onSubmit={handleSubmit(onsubmit)}>
                        <div className="col-12 col-md-6">
                            <InputFormText
                                pattern="[A-Za-z]+"
                                type='text'
                                name={'nombre'}
                                title={'Nombre'}
								keypress={handleKeyPress}
                                reference={register({
                                    required: { value: true, message: "Nombre es requerido" },
                                    maxLength: {
                                        value: 20,
                                        message: "Cantidad Maxima de Caracteres Superada",
                                    },
                                })}
                                placeholder={'Ingrese su nombre'}
                                errors={errors}
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <InputFormText
                                pattern="[A-Za-z]+"
                                type='text'
                                title='Apellido'
                                name={'apellido'}
                                keypress={handleKeyPress}
                                reference={register({
                                    required: { value: true, message: "Apellido es requerido" },
                                    maxLength: { value: 20, message: "Cantidad Maxima de Caracteres Superada" },
                                })}
                                placeholder={'Ingrese su Apellido'}
                                errors={errors}
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="flex-container-birth">
                                <InputFormText
                                    title='Fecha de cumpleaños'
                                    type="date"
                                    className="colordate"
                                    name="birthday"
                                    reference={register({ required: true })}
                                    errors={errors}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <PhonePrefix handleNumber={handleOnlyNumbers} country={country}/>
                        </div>

                        <div className="col-12 col-md-6">
                            <InputFormText
                                title='Nombre de usuario'
                                type="text"
                                name="username"
                                reference={register({ required: true, max: 10 })}
                                errors={errors}
                                placeholder="Ingrese su nombre de Usuario"

                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <InputFormText
                                title='Correo Electronico'
                                type="email"
                                name="email"
                                reference={register({ required: true, max: 10 })}
                                errors={errors}
                                placeholder="Ingrese su correo aqui"
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <InputPassword
                                title='Contraseña'
                                name="password"
                                reference={register(
								{   required: "You must specify a password",
                                    minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters"
                                    },validate: value =>
                                   value === password.current || "Las contraseñas no coinciden"
                                }
								)}
                                errors={errors}
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <InputPassword
                                title="Confirmar contraseña"
                                name="confirmpassword"
                                id="confirmpassword"
                                reference={register({
                                    required: "Tu deberias especificar tu contraseña",
                                    minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters"
                                    },
                                    validate: value =>
                                        value === password.current || "La contraseña no coincide"
                                })}
                                errors={errors}
                            />
                        </div>

                        <div className="col-12 col-md-6">
                           <PostalCode handleChange={countryChange}/>
                        </div>

                        <div className="col-12 col-md-6">
                           <CheckInputForm/>
                        </div>
                    </form>
                </div>
                <div className="container_img_foot">
                    <div className="responsive_img_foot">
                        <img src={foot_logo} alt="Foot-Logo" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Register;