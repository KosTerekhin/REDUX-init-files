const INITIAL_STATE = [];

const notificationsReducer = (state = INITIAL_STATE, action) => {
	if (action.type.includes(`NOTIFICATION_UPDATE`)) {
		return [
			...state,
			{
				id: action.meta.feature,
				message: action.payload
			}
		];
	}

	if (action.type.includes(`NOTIFICATION_CLEAR`)) {
		return state.filter((notif) => notif.id !== action.payload);
	}
	return state;
};

export default notificationsReducer;
