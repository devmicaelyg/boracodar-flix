/* eslint-disable import/extensions */
/* eslint-disable import/order */
import React from 'react';
import Logo from '../../assets/imagens/Logo-boracodar.png';
import './Menu.css';
import Button from '../Button/index.js';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="MicaFlix logo" />
    </Link>

    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo Video
    </Button>
  </nav>
);

export default Menu;
