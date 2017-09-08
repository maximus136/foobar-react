import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Main} from './app/main';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.scss';

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
