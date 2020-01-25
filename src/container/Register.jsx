import React,{useState} from 'react';
//import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import '../assets/styles/components/Register.scss';


const Register = (props) => {
    
    const [form, setValues] = useState({
        email:'',
        name:'',
        password:'',
    });

    const handleInput = (event) =>{
        setValues({
             ...form,
             [event.target.name]: event.target.value,   
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form)
    }

    return(
        <section className="register">
            <section className="register__container">
                <h2>Registrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input 
                        name="name"
                        className="input--register" 
                        type="text" 
                        placeholder="Nombre"
                        onChange={handleInput}
                    />
                    <input
                        name="email" 
                        className="input--register" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input 
                        name="password"
                        className="input--register" 
                        type="password" 
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button"> Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
            </section>
        </section>
    );
}
export default Register;