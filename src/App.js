import React from 'react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import createdStore from './store/index';
import { BrowserRouter as Router } from 'react-router-dom';
import ServiceApp from './ServiceApp';

import {
	onAuthStateChange,
	storeAuthUser,
	resetAuthState
} from './actions/index';

const store = createdStore();

class App extends React.Component {
	componentDidMount() {
		this.unsubscribeAuth = onAuthStateChange((authUser) => {
			store.dispatch(resetAuthState());
			store.dispatch(storeAuthUser(authUser));
		});
	}

	componentWillUnmount() {
		this.unsubscribeAuth();
	}

	render() {
		return (
			<Provider store={store}>
				<ToastProvider>
					<Router>
						<ServiceApp />
					</Router>
				</ToastProvider>
			</Provider>
		);
	}
}

export default App;
