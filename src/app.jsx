import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Dashboard from './dashboard'

const App = () => {

return <div>
  
   <Route path="/:organization" component={Dashboard}/>

</div>
};

export default App;
