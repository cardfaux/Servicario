import { createStore, combineReducers } from 'redux';
import servicesReducer from '../reducers/index';

// REDUX THINGS TO REMEMBER
// actions | action creators
// dispatch
// reducers
// connect

// FUNCTION TO CREATE THE STORE
const createdStore = () => {
	const serviceApp = combineReducers({
		service: servicesReducer
	});

	const browserSupport =
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__();

	const store = createStore(serviceApp, browserSupport);

	return store;
};

export default createdStore;
