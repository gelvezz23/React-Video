import React from 'react';
import '../assets/styles/components/Register.scss';


const Register = () => (
    <section className="register">
        <section className="register__container">
            <h2>Registrate</h2>
            <form className="register__container--form">
                <input className="input--register" type="text" placeholder="Nombre"/>
                <input className="input--register" type="text" placeholder="Correo"/>
                <input className="input--register" type="password" placeholder="Contraseña"/>
                <button className="button"> Registrarme</button>
            </form>
            <a href="">Iniciar sesión</a>
        </section>
    </section>

);

export default Register;