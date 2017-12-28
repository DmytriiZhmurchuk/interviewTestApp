require("./style/admin/mainadmin");
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import AppAdmin from './js/admin/App.jsx';

ReactDOM.render(
		<HashRouter>
		  <Route path='/' component={AppAdmin}/>
		</HashRouter>
	, document.getElementById('app-admin'));

if (module.hot) {
  module.hot.accept();
}