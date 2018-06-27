import React from 'react';
import App from './app';
import { HashRouter } from 'react-router-dom';

const Root = props => (
    <HashRouter>
      <App />
    </HashRouter>
);

export default Root;
