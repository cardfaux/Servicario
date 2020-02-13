import { combineReducers } from 'redux';

const createOfferList = (offersType) => {
	return (state = [], action) => {
		if (action.offersType !== offersType) {
			return state;
		}
		switch (action.type) {
			case 'FETCH_OFFERS_SUCCESS':
				return state;
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
