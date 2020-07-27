import React from 'react';
import Logo from '../../assets/imagens/Logo-boracodar.png'
import './Menu.css';
import Button from '../Button/index.js';

const Menu = () => {
    return(
        <nav className="Menu">
           <a href="/">
                <img className="Logo" src={Logo} alt="MicaFlix logo"/>
           </a>
           
           < Button as="a" className="ButtonLink" href= "/">
                Novo Video
           </Button>
        </nav>
    );
}

export default Menu; 