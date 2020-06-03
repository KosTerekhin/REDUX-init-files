import { API_REQUEST, apiError, apiSuccess } from '../../actions/api.actions';

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
	next(action);

	if (action.type.includes(API_REQUEST)) {
		const { payload: body, meta: { url, method, feature } } = action;
		fetch(url, {
			method,
			body
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch(apiSuccess(data, feature));
			})
			.catch((error) => {
				dispatch(apiError(error, feature));
			});
	}
};
