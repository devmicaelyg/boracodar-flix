import React from 'react';
import Logo from '../../assets/imagens/Logo-boracodar.png'
import './Menu.css';
import Button from '../Button/index.js';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <nav className="Menu">
           <Link href="/">
                <img className="Logo" src={Logo} alt="MicaFlix logo"/>
           </Link>
           
           < Button as={ Link } className="ButtonLink" to="/cadastro/video">
                Novo Video
           </Button>
        </nav>
    );
}

export default Menu; 