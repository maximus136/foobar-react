import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';
import Elements from './app/components/Elements';
import FAQ from './app/components/FAQ';
import About from './app/components/About';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.scss';

ReactDOM.render(
  <div>
    
    <Router history={browserHistory}>
      <Route
        path="/"
        component={Main}
      />
      <Route
        path="faq"
        component={FAQ}
      />
      <Route
        path="elements"
        component={Elements}
      />
      <Route
        path="about"
        component={About}
      />
    </Router>,
  </div>,
  document.getElementById('root')
);
