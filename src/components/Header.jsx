import React, { useState } from 'react';
import image from "../assets/img/doguito.svg"
import "../assets/css/componentes/header.css"
import { Link } from 'react-router-dom';


const Header = () => {

    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        //proporciona para actualizar el estado
        //! es el operador lógico de negación en JavaScript. Toma un valor booleano y lo invierte. Si menuActive es true, !menuActive será false, y viceversa.
        setMenuActive(!menuActive);
    };

    return(
        <header className="header container">
            {/*${menuActive ? 'menu-hamburguer--active' : ''}: Esta es una expresión ternaria que añade condicionalmente la clase menu-hamburguer--active:*/}
            {/*Si menuActive es true, se añade la clase menu-hamburguer--active.
            Si menuActive es false, no se añade ninguna clase adicional (se añade una cadena vacía).*/}
            <div className={`menu-hamburguer ${menuActive ? 'menu-hamburguer--active' : ''}`} onClick={toggleMenu}>
                <span className="menu-hamburguer__icon"/>
            </div>
            <div className="header-containerr">
                {/*Link y to nos ayuda a que las rutas no recarguen toda la pagina, solo carga la sección deseada */}
                <Link to="/" className="flex flex-center">
                    <img className="header__logo" src={image} alt="doguito"/>
                    <h1 className="header__title">Petshop</h1>
                </Link>
            </div>

            <nav className={`menu-header ${menuActive ? 'menu-header--ativo' : ''}`}>
                <button className="menu-header__close" onClick={toggleMenu}></button>
                <ul className="menu-items">
                    <li><Link className="menu-item menu-item__entrar" to="#">Entrar</Link></li>
                    <li><Link className="menu-item" to="#">Productos</Link></li>
                    <li><Link className="menu-item" to="/">Blog</Link></li>
                    <li><Link className="menu-item" to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
            <div className="menu-header-background"></div>
        </header>
    );
}

export default Header