import { UI_UPDATE_LOADING, UI_CLEAR_LOADING } from '../actions/ui.actions';

const INITIAL_STATE = {
	loading: false
};

const uiReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UI_UPDATE_LOADING:
			return {
				...state,
				loading: true
			};

		case UI_CLEAR_LOADING:
			return {
				...state,
				loading: false
			};

		default:
			return state;
	}
};

export default uiReducer;
