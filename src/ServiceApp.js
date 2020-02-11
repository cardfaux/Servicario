import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from './components/Spinner';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { logout } from './actions/index';
import Routes from './Routes';

export class ServiceApp extends Component {
	handleLogout = () => this.props.dispatch(logout());

	renderApplication(auth) {
		return (
			<React.Fragment>
				<Navbar logout={this.handleLogout} auth={auth} id='navbar-main' />
				<Navbar logout={this.handleLogout} auth={auth} id='navbar-clone' />
				<Sidebar />
				<Routes />
			</React.Fragment>
		);
	}

	render() {
		const { auth } = this.props;
		return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />;
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};

export default connect(mapStateToProps)(ServiceApp);
