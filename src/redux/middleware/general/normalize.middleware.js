import { dataNormalized } from '../../actions/normalize.actions';

export const normilizeMiddleware = ({ dispatch }) => (next) => (action) => {
	if (action.type.includes('UPDATE') && action.meta && action.meta.normalizedId) {
		const data = action.payload.slice(0, 3);

		dispatch(dataNormalized(action.meta.feature));

		next({ ...action, payload: data, meta: null });
	} else {
		next(action);
	}
};
