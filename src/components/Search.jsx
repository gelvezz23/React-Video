import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) =>{ 
    
    const inputStyle = classNames('input', {isHome}); 

    return(
        <section className="main">
            <h1 className="main__title">¿ Que quieres ver hoy ?</h1>
            <input className={inputStyle} type="text" placeholder="buscar ..."/>
        </section>

    );
}
export default Search;