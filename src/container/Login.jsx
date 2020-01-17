import React from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/image/icons8-google-50.png';
import TwitterIcon from '../assets/image/icons8-twitter-50.png';
import '../assets/styles/components/Login.scss';
const Login =() => (

    <section className="login">
        <section className="login__container">
            <h2>Inicia sesion</h2>
            <form className="login__container--form">
                <input className="input--login" type="text" placeholder="Correo"/>
                <input className="input--login" type="password" placeholder="Contraseña"/>
                <button className="button">Iniciar sesión</button>
                <div className="login__container--remmenber">
                    <label for="">
                        <input type="checkbox" name="" id="cbox1" className="" value="checkbos"/> Recuerdame
                    </label>
                    <a href="/">Olvidé mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                
                    <div><img src={GoogleIcon} alt="Google"/>Iniciar sesion con Google</div>
                    <div><img src={TwitterIcon} alt="Twitter"/>Iniciar sesion con Twitter</div>   

            </section>
            <p className="login__container--register">No tienes cuenta 
            <Link to="/register">Registrate</Link></p>

        </section>
    </section>


);

export default Login;