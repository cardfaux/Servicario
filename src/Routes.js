import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import FAQ from './pages/FAQ';
import Profile from './pages/Profile';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Secret from './pages/Secret';
import ServiceCreate from './pages/services/ServiceCreate';
import UserServices from './pages/services/UserServices';
import SentOffers from './pages/offers/SentOffers';
import RecievedOffers from './pages/offers/RecievedOffers';
import RecievedCollaborations from './pages/collaborations/RecievedCollaborations';
import CollaborationDetail from './pages/collaborations/CollaborationDetail';

const Routes = () => {
	return (
		<Switch>
			<Route path='/secret'>
				<Secret />
			</Route>
			<Route path='/register'>
				<Register />
			</Route>
			<Route path='/login'>
				<Login />
			</Route>
			<Route path='/collaborations/me'>
				<RecievedCollaborations />
			</Route>
			<Route path='/collaborations/:id'>
				<CollaborationDetail />
			</Route>
			<Route path='/offers/sent'>
				<SentOffers />
			</Route>
			<Route path='/offers/recieved'>
				<RecievedOffers />
			</Route>
			<Route path='/services/me'>
				<UserServices />
			</Route>
			<Route path='/services/new'>
				<ServiceCreate />
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
