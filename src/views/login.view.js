import React, {useState} from 'react';
import CustomLabel from '../components/label.component';
import FormInput from '../components/input.component';
import CustomButton from '../components/button.component';

import img_logo from '../assets/img_AlyPay.png';
import foot_logo from '../assets/foot_alySystem.svg';
import ComponentImage from '../components/image.component';
import CustomLink from '../components/link.component';

const Login = () => {
  const [user, setUser] = useState({email: '', password:''})
  const {email, password} = user;

  const onHandleChange = evt => { const {name, value} = evt.target;
  setUser(user =>({...user, [name]: value})); }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user)
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser(user =>({...user, [name]: value}));
  }

  return (
  <div className='sign-in'>
    <div className="containerInputs">
      <ComponentImage className='responsive_img' src={img_logo} />

      <div className="contenedor">
        <div className="hijo">
          <CustomLabel type='text'>Iniciar Sesión</CustomLabel>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
      <CustomLabel type='text'>Correo Electrónico:</CustomLabel>
      <FormInput 
        className="form-input"
        name='email' 
        type='email' 
        value={email} 
        required 
        handleChange={onHandleChange}
        label="Ingrese correo aquí"
      />

      <CustomLabel type='text'>Contraseña</CustomLabel>
      <FormInput
        id="password"
        name="password"
        className="form-input"
        type="password"
        value={password}
        onChange={handleChange}
        label="Ingrese contraseña aquí"
      />
      <div className="sign-in__actions">
        <CustomLink varian='filled' type='submit' caption='Registrarme' to='/register'/>
        <CustomButton type='button'>Iniciar Sesión</CustomButton>
      </div>
    </form>
  </div>
  <div className="container_img_foot">
    <div className="responsive_img_foot">
      <ComponentImage src={foot_logo}  alt="Foot-Logo" />
    </div>
    </div>
  </div>
    
  )
} 
export default Login;