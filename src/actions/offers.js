import { FETCH_OFFERS_SUCCESS, CHANGE_OFFER_STATUS } from '../types/index';
import * as api from '../api/index';

export const createOffer = (offer) => {
	return api.createOffer(offer);
};

const extractDataFromOffer = async (offer, userType) => {
	const service = await offer.service.get();
	const user = await offer[userType].get();

	offer.service = service.data();
	offer[userType] = user.data();

	return offer;
};

export const fetchSentOffers = (userId) => (dispatch) => {
	return api.fetchSentOffers(userId).then(async (offers) => {
		const mappedOffers = await Promise.all(
			offers.map((offer) => extractDataFromOffer(offer, 'toUser'))
		);
		dispatch({
			type: FETCH_OFFERS_SUCCESS,
			offers: mappedOffers,
			offersType: 'sent'
		});
		return mappedOffers;
	});
};

export const fetchRecievedOffers = (userId) => (dispatch) => {
	return api.fetchRecievedOffers(userId).then(async (offers) => {
		const mappedOffers = await Promise.all(
			offers.map((offer) => extractDataFromOffer(offer, 'fromUser'))
		);
		dispatch({
			type: FETCH_OFFERS_SUCCESS,
			offers: mappedOffers,
			offersType: 'recieved'
		});
		return mappedOffers;
	});
};

export const acceptOffer = (offerId) => (dispatch) => {
	return api.changeOfferStatus(offerId, 'accepted').then((_) =>
		dispatch({
			type: CHANGE_OFFER_STATUS,
			status: 'accepted',
			offerId,
			offersType: 'recieved'
		})
	);
};

export const declineOffer = (offerId) => (dispatch) => {
	return api.changeOfferStatus(offerId, 'declined').then((_) =>
		dispatch({
			type: CHANGE_OFFER_STATUS,
			status: 'declined',
			offerId,
			offersType: 'recieved'
		})
	);
};

export const changeOfferStatus = (offerId, status) => (dispatch) => {
	return api.changeOfferStatus(offerId, status).then((_) =>
		dispatch({
			type: CHANGE_OFFER_STATUS,
			status,
			offerId,
			offersType: 'recieved'
		})
	);
};
