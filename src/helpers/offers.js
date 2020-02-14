import { Timestamp } from '../db/index';

export const newCollaboration = ({
	offer: { service, time, toUser, id },
	fromUser
}) => {
	return {
		serviceId: service.id,
		title: service.title,
		image: service.image,
		time: time * 60 * 60,
		allowedPeople: [fromUser.uid, toUser.uid],
		joinedPeople: [],
		toUser: toUser.uid,
		fromUser: fromUser.uid,
		fromOffer: id,
		status: 'pending',
		createdAt: Timestamp.fromDate(new Date())
	};
};

export const newMessage = ({ offer: { service, toUser }, fromUser }) => {
	return {
		isRead: false,
		type: 'invitation',
		text: `Hello ${toUser.fullName}, Please Join Collaboration As Soon As Possible`,
		cta: '',
		toUser: toUser.uid,
		fromUser: {
			name: fromUser.fullName,
			avatar: fromUser.avatar
		},
		serviceTitle: service.title,
		serviceLink: `/services/${service.id}`,
		createdAt: Timestamp.fromDate(new Date())
	};
};
