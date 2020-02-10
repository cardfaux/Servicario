import { FETCH_SERVICES_SUCCESS } from '../types/index';

import db from '../db/index';

export const fetchServices = () => {
	return db
		.collection('services')
		.get()
		.then((snapshot) => {
			const services = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));

			return {
				type: FETCH_SERVICES_SUCCESS,
				services: services
			};
		});
};
