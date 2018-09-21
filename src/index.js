import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import '@/assets/less/index.less'
import App from './App';
// import store from './store'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
