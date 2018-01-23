require("./style/admin/mainadmin");
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import studentsReducer from './js/admin/store/reducers/StudentsReducer';

import AppAdmin from './js/admin/App.jsx';

const rootReducer = combineReducers({
    studentsList: studentsReducer
});

const store = createStore(rootReducer);

const app = (
	<Provider store={store}>
		<HashRouter>
		  <Route path='/' component={AppAdmin}/>
		</HashRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('app-admin'));

if (module.hot) {
  module.hot.accept();
}