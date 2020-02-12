import { SET_AUTH_USER, RESET_AUTH_STATE } from '../types/index';

import * as api from '../api/index';

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
