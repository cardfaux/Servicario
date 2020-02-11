import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import FAQ from './pages/FAQ';
import Profile from './pages/Profile';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => {
	return (
		<Switch>
			<Route path='/register'>
				<Register />
			</Route>
			<Route path='/login'>
				<Login />
			</Route>
			<Route path='/services/:serviceId'>
				<ServiceDetail />
			</Route>
			<Route path='/services'>
				<Services />
			</Route>
			<Route path='/profile'>
				<Profile />
			</Route>
			<Route path='/faq'>
				<FAQ />
			</Route>
			<Route path='/'>
				<HomePage />
			</Route>
		</Switch>
	);
};

export default Routes;
