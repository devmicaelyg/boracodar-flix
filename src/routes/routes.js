import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from '../components/Menu';

 const Routes = () => {
     return(
         <BrowserRouter>
             <Switch>
             <Route component={Menu} path="/" exact/>
             </Switch>
         </BrowserRouter>
     );
}

 export default Routes;