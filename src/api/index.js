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
const createUserProfile = (userProfile) => {
	return db
		.collection('profiles')
		.doc(userProfile.uid)
		.set(userProfile);
};

export const register = async ({ email, password, fullName, avatar }) => {
	try {
		const res = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		const { user } = res;
		const userProfile = {
			uid: user.uid,
			fullName,
			email,
			avatar,
			services: [],
			description: ''
		};
		await createUserProfile(userProfile);
		return userProfile;
	} catch (error) {
		const errorMessage = error.message;
		return Promise.reject(errorMessage);
	}
};

export const login = ({ email, password }) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.catch((error) => Promise.reject(error.message));
};

export const onAuthStateChange = (onAuthCallback) => {
	return firebase.auth().onAuthStateChanged(onAuthCallback);
};

export const getUserProfile = (uid) =>
	db
		.collection('profiles')
		.doc(uid)
		.get()
		.then((snapshot) => ({ uid, ...snapshot.data() }));
