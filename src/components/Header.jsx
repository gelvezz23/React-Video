import React from 'react';
import '../assets/styles/components/Header.scss';
import Logo from './../assets/image/logo-platzi-video-BW2.png';
import userIcon from './../assets/image/icons8-usuario-círculo-64.png';

const Header = () => (

    <header className="header">
        <img 
        className="header__img" src={Logo}/> 

        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} />
                <p>perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesion</a></li>
            </ul>
        </div>
        
    </header>

);


export default Header;