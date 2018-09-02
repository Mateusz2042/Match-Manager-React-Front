import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store/configureStore';
import Router from './utils/Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <Router />
    </Provider>
  </Fragment>, document.getElementById('root'),
);
registerServiceWorker();
