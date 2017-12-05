require("./style/front/mainfront");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/front/App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}