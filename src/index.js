import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import '@/assets/less/index.less'
import App from './App'
import store from './store'
import Common from '@/containers/common'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Common></Common>
    </div>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
