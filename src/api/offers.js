import db from '../db/index';
import { createRef } from '../actions/index';

export const createOffer = (offer) => {
	return db.collection('offers').add(offer);
};

export const fetchSentOffers = (userId) => {
	const userRef = createRef('profiles', userId);
	return db
		.collection('offers')
		.where('fromUser', '==', userRef)
		.get()
		.then((snapshot) =>
			snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
		);
};

export const fetchRecievedOffers = (userId) => {
	const userRef = createRef('profiles', userId);
	return db
		.collection('offers')
		.where('toUser', '==', userRef)
		.get()
		.then((snapshot) =>
			snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
		);
};
