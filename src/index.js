import React from 'react';
import {render} from 'react-dom';
import Application from './application.js';

require('./styles/base.scss');
render(
  <Application />,
  document.getElementById('app')
);
