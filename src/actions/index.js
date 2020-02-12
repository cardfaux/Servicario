import {
	FETCH_SERVICES_SUCCESS,
	FETCH_SERVICE_SUCCESS,
	REQUEST_SERVICE,
	SET_AUTH_USER,
	RESET_AUTH_STATE,
	FETCH_USER_SERVICES_SUCCESS
} from '../types/index';

import * as api from '../api/index';

//-------------------------SERVICES STARTS---------------------------
export const fetchServices = () => (dispatch) => {
	return api.fetchServices().then((services) =>
		dispatch({
			type: FETCH_SERVICES_SUCCESS,
			services: services
		})
	);
};

export const fetchUserServices = (userId) => (dispatch) =>
	api
		.fetchUserServices(userId)
		.then((services) =>
			dispatch({ type: FETCH_USER_SERVICES_SUCCESS, services })
		);

export const fetchServicesById = (serviceId) => (dispatch, getState) => {
	const lastService = getState().selectedService.item;

	if (lastService.id && lastService.id === serviceId) {
		return Promise.resolve();
	}

	dispatch({ type: REQUEST_SERVICE });
	return api.fetchServiceById(serviceId).then(async (service) => {
		//service.user = await api.getUserProfile(service.user);
		const user = await service.user.get();
		service.user = user.data();
		service.user.id = user.id;
		dispatch({ type: FETCH_SERVICE_SUCCESS, service });
	});
};

export const createService = (newService, userId) => {
	newService.price = parseInt(newService.price, 10);
	newService.user = api.createRef('profiles', userId);

	return api.createService(newService);
};
//---------------------------------SERVICES ENDS---------------------------

// ------------------AUTH STARTS-------------------------------------

export const register = (registerFormData) => {
	return api.register({ ...registerFormData });
};

export const login = (loginData) => {
	return api.login({ ...loginData });
};

export const logout = () => (dispatch) => {
	return api
		.logout()
		.then((_) => dispatch({ user: null, type: SET_AUTH_USER }));
};

export const onAuthStateChange = (onAuthCallback) => {
	return api.onAuthStateChange(onAuthCallback);
};

export const storeAuthUser = (authUser) => (dispatch) => {
	dispatch({ type: RESET_AUTH_STATE });
	if (authUser) {
		return api.getUserProfile(authUser.uid).then((userWithProfile) => {
			dispatch({ user: userWithProfile, type: SET_AUTH_USER });
			return userWithProfile;
		});
	} else {
		return dispatch({ user: null, type: SET_AUTH_USER });
	}
};

//---------------------------AUTH ENDS-------------------------------
