import React, {Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Pages/Home";


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
const App = () => {
  useEffect( () => {
    //Initializes Materialize JS
    M.AutoInit();
  });
  return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Fragment>
						<Route exact path='/' component={Login} />
						<Route exact path='/home' component={Home} />
					</Fragment>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
