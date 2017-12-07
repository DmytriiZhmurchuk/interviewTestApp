require("./style/admin/mainadmin");

import React from 'react';
import ReactDOM from 'react-dom';
import AppAdmin from './js/admin/App.jsx';

ReactDOM.render(<AppAdmin/>, document.getElementById('app-admin'));

if (module.hot) {
  module.hot.accept();
}