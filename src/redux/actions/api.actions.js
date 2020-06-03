export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = `API_SUCCESS`;
export const API_ERROR = `API_ERROR`;

export const apiRequest = (body, { url, method, feature }) => ({
	type: `${feature} ${API_REQUEST}`,
	body,
	meta: {
		url,
		method,
		feature
	}
});

export const apiSuccess = (data, feature) => ({
	type: `${feature} ${API_SUCCESS}`,
	payload: data
});

export const apiError = (error, feature) => ({
	type: `${feature} ${API_ERROR}`,
	payload: error
});
