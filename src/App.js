import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import FAQ from './pages/FAQ';
import Profile from './pages/Profile';
import Services from './pages/Services';
import Sidebar from './components/Sidebar';

import Navbar from './components/Navbar';
import NavbarClone from './components/NavbarClone';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<NavbarClone />
				<Sidebar />
				<Switch>
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
			</Router>
		</div>
	);
}

export default App;
