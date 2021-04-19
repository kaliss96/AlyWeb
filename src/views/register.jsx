import React, { useState, Fragment,useRef } from "react";
import { useForm } from "react-hook-form";
import img_logo from "../assets/img_AlyPay.png";
import foot_logo from "../assets/foot_alySystem.svg";
import { Link } from "react-router-dom";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { countryList } from '../data/country.util';
const Register = () => {
const [showPassword, setShowPassword] = useState(false);
const [showConfirm, setShowConfirm] = useState(false); 

  const { register, errors, handleSubmit ,watch } = useForm();
  const [prefix, setPrefix] = useState("");
  const [country, setCountry] = useState("");
  

  const onsubmit = (data, e) => {
    console.log(data);
  };

  const toglePassword = (e) => {
    setShowPassword(!showPassword);
  };

  const togleConfirm = (e) => {
    setShowConfirm(!showConfirm);
  };
  
   const countryChange = (event) => {
	//   setCountry(country);
	
	var country_selected = event.target.options[event.target.selectedIndex].value;
	setCountry(country_selected);
  //console.log("test ",phonecode);
	 
	//si se agregan mas data-"llaves" en el option
	  var dataset = event.target.options[event.target.selectedIndex].dataset;
  }
  
  const prefixChange = (event) => {
	
	var prefix_selected = event.target.options[event.target.selectedIndex].value;
	 setPrefix(prefix_selected);
  }
  
     const password = useRef({});
  password.current = watch("password", "");
 
 const onSubmit = async data => {
    alert(JSON.stringify(data));
  };

  return (
    <Fragment>
      <div className="regis-in">
        <div className="containerInputs-register">
          <img className="responsive_img" src={img_logo} alt="test-image" />

          <div className="contenedor">
            <div className="hijo">
              <label className="text-regist" type="text">
                Registro de usuario
              </label>
            </div>
          </div>

          <form
            action=""
            className="rowed my-5 mx-5 px-3 py-3 border-warning"
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label className="custom-label" type="text">
                  Nombre
                </label>

                <div className="group">
                  <input
                    type="text"
                    className="form-input"
                    name="nombre"
                    id="nombre"
                    ref={register({
                      required: { value: true, message: "Nombre es requerido" },
                      maxLength: {
                        value: 20,
                        message: "Cantidad Maxima de Caracteres Superada",
                      },
                    })}
                    autoComplete="off"
                    placeholder="Ingrese su nombre"
                  />
                </div>
                {errors.nombre && (
                  <label className="custom-label error-label">
                    {errors.nombre.message}
                  </label>
                )}
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label className="custom-label" type="text">
                  Apellido
                </label>

                <div className="group">
                  <input
                    type="text"
                    className="form-input"
                    name="apellido"
                    id="apellido"
                    placeholder="Ingrese su apellido"
                    pattern="[A-Za-z]+"
                    ref={register({
                      required: {
                        value: true,
                        message: "Apellido es requerido",
                      },
                      maxLength: {
                        value: 20,
                        message: "Cantidad Maxima de Caracteres Superada",
                      },
                    })}
                  />
                </div>
                {errors.apellido && (
                  <label className="custom-label error-label">
                    {errors.apellido.message}
                  </label>
                )}
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label type="text" className="custom-label">
                  Fecha de cumpleaños
                </label>
                <div className="flex-container-birth">
                  <div className="group">
                    <input
                      type="date"
                      className="colordate"
                      name="birthday"
                      id="birthday"
                      value={0}
                      ref={register({ required: true })}
                    />
                    {errors.birthday && (
                      <label className="custom-label error-label">
                        Seleccione una Fecha
                      </label>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-row">
                
                
                <div className="group mx-2 prefijo">
                  <label for="inputState" className="custom-label">
                    Prefijo
                  </label>
                  <select id="inputState" onChange={prefixChange}  className="form-input" disabled>
                    <option>+(000)</option>
                    {countryList.map((item, index) => {
                    if (country === item.value)
                      return <option key={`op${index}`} value={`(${item.phonecode})`} selected disabled> {`(${item.phonecode})`}</option>;
                    else
                      return <option key={`op${index}`} value={`(${item.phonecode})`} disabled> {`(${item.phonecode})`}</option>
						        })}
                  </select>
                </div>
                <div className="group mx-2 telefono">
                  <label for="telefono" className="custom-label">
                    Telefono
                  </label>
                  <input type="number" pattern="^-?[0-9]\d*\.?\d*$" className="form-input text-center" id="telefono" name="telefono" />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label type="text" className="custom-label">
                  Nombre de usuario
                </label>

                <div className="group">
                  <input
                    type="text"
                    className="form-input"
                    name="username"
                    id="username"
                    ref={register({ required: true, max: 10 })}
                    placeholder="Ingrese su nombre de Usuario"
                    autoComplete="off"
                  />
                  {errors.username && (
                    <label className="custom-label error-label">
                      Nombre de usuario es requerido
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label type="text" className="custom-label">
                  Correo Electrónico:
                </label>

                <div className="group">
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    id="email"
                    ref={register({ required: true, max: 10 })}
                    placeholder="Ingrese correo aqui"
                    autoComplete="off"
                  />

                  {errors.email && (
                    <label className="custom-label error-label">
                      Correo es requerido
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label type="text" className="custom-label">
                  Contraseña
                </label>

                <div className="group">
                  <input
                    type={!showPassword ? "password" : "text"}
                    name="password"
                    id="password"
                    className="form-input"
                    autoComplete="off"
                    placeholder="Ingrese Contraseña Aqui"
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
                    <label className="custom-label error-label">
					{errors.password.message}
                    </label>
                  )}
                 
                  
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label type="text" className="custom-label">
                  Contraseña
                </label>

                <div className="group">
                  <input
                    type={!showConfirm ? "password" : "text"}
                    name="confirmpassword"
                    id="confirmpassword"
                    className="form-input"
                    placeholder="Confirmar contraseña"
                    autoComplete="off"
					ref={register({
						required: "You must specify a confirm password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          },
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
                  />

                  {errors.confirmpassword && (
                    <label className="custom-label error-label">
					{errors.confirmpassword.message}
                    </label>
                  )}

                  {
                    <i onClick={togleConfirm}>
                      {!showConfirm ? <VisibilityOff /> : <Visibility />}
                    </i>
                  }
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-row">
              <div className="group mx-2 telefono">
                  <label for="telefono" className="custom-label">
                    Cod. Postal
                  </label>
                  <input 
                    type="text" 
                    placeholder="####"
                    className="form-input text-center" 
                    id="postalcode" 
                    name="postalcode" 
                    />
                </div>

              <div className="group mx-2 pais">
                  <label for="inputState" className="custom-label">
                    Pais
                  </label>
                  <select id="pais" className="form-input text-center" onChange={countryChange} name="pais">
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

            <div className="col-12 col-md-6">
              <div className="form-group">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="opt1"
                  />
                  <label className="form-check-label" type="text">
                    Acepto los Terminos y Condiciones
                  </label>
                </div>
                <button
                  className="btn btn-success btn-block my-2"
                  type="submit"
                >
                  Siguiente
                </button>
              </div>
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
