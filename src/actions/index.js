import { FETCH_SERVICES_SUCCESS, FETCH_SERVICE_SUCCESS } from '../types/index';

import * as api from '../api/index';

export const fetchServices = () => {
	return api.fetchServices().then((services) => ({
		type: FETCH_SERVICES_SUCCESS,
		services: services
	}));
};

export const fetchServicesById = (serviceId) => {
	return api.fetchServiceById(serviceId).then((service) => ({
		type: FETCH_SERVICE_SUCCESS,
		service: service
	}));
};
