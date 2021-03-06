import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../db/index';

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

export const logout = () => firebase.auth().signOut();

export const onAuthStateChange = (onAuthCallback) => {
	return firebase.auth().onAuthStateChanged(onAuthCallback);
};

export const getUserProfile = (uid) =>
	db
		.collection('profiles')
		.doc(uid)
		.get()
		.then((snapshot) => ({ uid, ...snapshot.data() }));
