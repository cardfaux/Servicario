import db from '../db/index';
import { createRef } from './index';

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

export const changeOfferStatus = (offerId, status) => {
	return db
		.collection('offers')
		.doc(offerId)
		.update({ status });
};

export const markOfferAsInCollaboration = (offerId) => {
	return db
		.collection('offers')
		.doc(offerId)
		.update({ collaborationCreated: true });
};
