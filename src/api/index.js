import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../db/index';

// ------------------------------------SERVICES ---------------------------------------------

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

// ------------------------------------AUTH -------------------------------------------------
export const register = async ({ email, password, fullName, avatar }) => {
	try {
		const res = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		const { user } = res;
		console.log(user);
		return true;
	} catch (error) {
		const errorMessage = error.message;
		return Promise.reject(errorMessage);
	}
};
