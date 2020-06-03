import { HERO_UPDATE_STORE, HERO_SET_ERROR } from '../actions/hero.actions';

const INITIAL_STATE = {
	heroes: null,
	error: null
};

const heroReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case HERO_UPDATE_STORE:
			return {
				...state,
				heroes: action.payload
			};

		case HERO_SET_ERROR:
			return {
				...state,
				heroes: action.payload
			};

		default:
			return state;
	}
};

export default heroReducer;
