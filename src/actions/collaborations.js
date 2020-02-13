import * as api from '../api/index';

export const collaborate = ({ collaboration, message }) =>
	api.createCollaboration(collaboration).then((collabId) => {
		message.cta = `/collaborations/${collabId}`;
		api.sendMessage(message);
		return collabId;
	});
