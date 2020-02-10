import db from '../db/index';

export const fetchServiceById = (serviceId) =>
	db
		.collection('services')
		.doc(serviceId)
		.get()
		.then((snapshot) => ({ id: snapshot.id, ...snapshot.data() }));

export const fetchServices = () => {
	return db
		.collection('services')
		.get()
		.then((snapshot) => {
			const services = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));

			return services;
		});
};
