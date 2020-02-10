import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import serviceApp from '../reducers/index';

// FUNCTION TO CREATE THE STORE
const createdStore = () => {
	const middlewares = [thunk];
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(logger);
	}

	const store = createStore(
		serviceApp,
		composeEnhancers(applyMiddleware(...middlewares))
	);

	return store;
};

export default createdStore;
