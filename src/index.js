import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import CadastroVideo from './components/pages/CadastroVideo';
import Pagina404 from './components/pages/Erro';
import CadastroCategoria from './components/pages/CadastroCategoria';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route component={Home} path="/" exact/>
      <Route component={CadastroVideo} path="/cadastro/video" />
      <Route component={CadastroCategoria} path="/cadastro/categoria"/>

      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

