import React from 'react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import createdStore from './store/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import FAQ from './pages/FAQ';
import Profile from './pages/Profile';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Login from './pages/Login';
import Register from './pages/Register';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const store = createdStore();

function App() {
	return (
		<Provider store={store}>
			<ToastProvider>
				<Router>
					<Navbar />
					<Navbar id='navbar-clone' />
					<Sidebar />
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
				</Router>
			</ToastProvider>
		</Provider>
	);
}

export default App;
