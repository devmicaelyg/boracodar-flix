import React from 'react';
import TemplatePages from '../../TemplatePages';
import { Link } from 'react-router-dom';

const CadastroVideo = () => {
    return(
        <TemplatePages>
            <h1> Cadastro de video </h1>
            
            <Link to="cadastro/categoria">
                Cadastro de Categorias
            </Link>
        </TemplatePages>
      
    );
}

export default CadastroVideo;