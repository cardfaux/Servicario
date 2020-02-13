import db from '../db/index';

export const createOffer = (offer) => {
	return db.collection('offers').add(offer);
};
