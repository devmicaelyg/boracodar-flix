import React, { useState } from 'react';
import TemplatePages from '../../TemplatePages';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => {
    const [categorias, setCategorias] = useState([]);
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

    return(
        <TemplatePages>
            <h1> Cadastro de Categoria </h1>
            
            <form onSubmit={ function handleSubmit(infosEvento){
                infosEvento.preventDefault();
                console.log('Você tentou enviar o form')
            } } >

                <label>
                    Nome da categoria:
                    <input type="text"
                    value={nomeDaCategoria}
                    onChange={function handlerTeste (infosEvento){
                        setNomeDaCategoria(infosEvento.target.value);
                    }}
                    />
                </label>
                <button>
                    Cadastrar 
                </button>
            </form>

            <ul> 
                {categorias.map((categoria) => {
                    return(
                        <li key={categoria}>
                            {categoria}
                        </li>
                    );
                })}
            </ul>
            <Link to="/">
               Ir para home
            </Link>

        </TemplatePages>
      
    );
}

export default CadastroCategoria;