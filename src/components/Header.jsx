import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';

import Logo from './../assets/image/logo-platzi-video-BW2.png';
import userIcon from './../assets/image/icons8-usuario-círculo-64.png';

const Header = () => (

    <header className="header">
        <Link to="/">
            <img className="header__img" src={Logo}/>
        </Link>
        
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} />
                <p>perfil</p>
            </div>
            <ul>
                <li><Link to="/">Cuenta</Link></li>
                <li><Link to="/login">Iniciar Sesion</Link></li>
            </ul>
        </div>
        
    </header>

);


export default Header;