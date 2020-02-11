import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import Routes from './Routes';

export class ServiceApp extends Component {
	renderApplication(auth) {
		return (
			<React.Fragment>
				<Navbar auth={auth} />
				<Navbar auth={auth} id='navbar-clone' />
				<Sidebar />
				<Routes />
			</React.Fragment>
		);
	}

	render() {
		const { auth } = this.props;
		return this.renderApplication(auth);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};

export default connect(mapStateToProps)(ServiceApp);
