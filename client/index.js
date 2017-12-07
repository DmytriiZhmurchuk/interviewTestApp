require("./style/frontend/mainfrontend");
import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/frontend/App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}