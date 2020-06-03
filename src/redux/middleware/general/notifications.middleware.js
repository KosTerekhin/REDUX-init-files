import { updateNotification, clearNotification } from '../../actions/notifications.actions';

const timer = 1000;

export const notificationsMiddleware = ({ dispatch }) => (next) => (action) => {
	if (action.type.includes('NOTIFICATION') && action.meta && action.meta.feature) {
		next(updateNotification(action.payload, action.meta.feature));

		setTimeout(() => {
			dispatch(clearNotification(action.meta.feature));
		}, timer);
	} else {
		next(action);
	}
};
