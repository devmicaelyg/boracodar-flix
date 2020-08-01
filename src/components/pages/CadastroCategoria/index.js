import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplatePages from '../../TemplatePages';
import FormField from '../../FormField';
import Button from '../../Button';

const CadastroCategoria = () => {
  const firstValues = {
    name: ' ',
    description: ' ',
    color: '????',
  };

  const [category, setCategory] = useState([]);
  const [NewValue, setNewValue] = useState(firstValues);

  const setNewValues = (chave, valor) => {
    // chave: nome, descrição, cor
    setNewValue({
      ...NewValue,
      [chave]: valor,
    });
  };

  const handleChange = (infosDoEvento) => {
    setNewValues(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  };

  const handleAddCategory = (infosDoEvento) => {
    infosDoEvento.preventDefault();
    setCategory([
      ...category,
      NewValue]);

    setNewValue(firstValues);
  };

  // ==========

  useEffect(() => {
    console.log('Aló Brasel');

    setTimeout(() => {
      setCategory([
        ...category,
        {
          id: 1,
          nome: 'Front-end',
          descricao: 'React é massa',
          cor: '#6BD1FF',
        },
        {
          id: 2,
          nome: 'Back-end',
          descricao: 'Prefiro o node',
          cor: '#6BD1FF',
        },
      ]);
    }, 4 * 1000);
  }, []);

  // useEffect(() => {
  //   if (window.location.href.includes('localhost')) {
  //     const URL = 'http://localhost:8080/categorias';
  //     fetch(URL)
  //       .then(async (serverResponse) => {
  //         if (serverResponse.ok) {
  //           const resposta = await serverResponse.json();
  //           setCategory(resposta);
  //           return;
  //         }
  //         throw new Error('Não foi possivel pegar os dados');
  //       });
  //   }
  // }, []);

  return (
    <TemplatePages>
      <h1> Cadastro de Categoria </h1>

      <form onSubmit={handleAddCategory}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={NewValue.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="description"
          value={NewValue.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={NewValue.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {category.length === 0 && (
        <div>
          Loading ...
        </div>
      )}

      <ul>
        {category.map((categoriae, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoriae}${index}`}>
            {categoriae.name}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>

    </TemplatePages>

  );
};

export default CadastroCategoria;
