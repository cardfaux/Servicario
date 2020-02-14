import React from 'react';
import { connect } from 'react-redux';

import Spinner from './components/Spinner';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { logout } from './actions/index';
import Routes from './Routes';

class ServiceApp extends React.Component {
	handleLogout = (uid) => this.props.dispatch(logout(uid));

	renderApplication = (auth) => (
		<React.Fragment>
			<Navbar
				loadFresh
				id='navbar-main'
				logout={() => this.handleLogout(auth.user.uid)}
				auth={auth}
			/>
			<Navbar
				auth={auth}
				logout={() => this.handleLogout(auth.user.uid)}
				id='navbar-clone'
			/>
			<Sidebar />
			<Routes />
		</React.Fragment>
	);

	render() {
		const { auth } = this.props;
		return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />;
	}
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(ServiceApp);
