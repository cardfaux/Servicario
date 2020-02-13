import { combineReducers } from 'redux';
import { FETCH_OFFERS_SUCCESS, CHANGE_OFFER_STATUS } from '../types/index';

const createOfferList = (offersType) => {
	return (state = [], action) => {
		if (action.offersType !== offersType) {
			return state;
		}
		switch (action.type) {
			case FETCH_OFFERS_SUCCESS:
				return action.offers;
			case CHANGE_OFFER_STATUS:
				const nextState = [...state];
				const offerIndex = nextState.findIndex((o) => o.id === action.offerId);
				nextState[offerIndex].status = action.status;
				return nextState;
			default:
				return state;
		}
	};
};

const offers = combineReducers({
	recieved: createOfferList('recieved'),
	sent: createOfferList('sent')
});

export default offers;
