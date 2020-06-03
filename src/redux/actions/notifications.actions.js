export const NOTIFICATION_UPDATE = `NOTIFICATION_UPDATE`;
export const NOTIFICATION_CLEAR = `NOTIFICATION_CLEAR`;

export const updateNotification = (message, feature) => ({
	type: `${feature} ${NOTIFICATION_UPDATE}`,
	payload: message,
	meta: {
		feature
	}
});

export const clearNotification = (feature) => ({
	type: `${feature} ${NOTIFICATION_CLEAR}`,
	payload: feature
});
