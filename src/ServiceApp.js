import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import Routes from './Routes';

export class ServiceApp extends Component {
	renderApplication() {
		return (
			<React.Fragment>
				<Navbar />
				<Navbar id='navbar-clone' />
				<Sidebar />
				<Routes />
			</React.Fragment>
		);
	}

	render() {
		return this.renderApplication();
	}
}

export default ServiceApp;
