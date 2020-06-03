export const UI = '[ui]';
export const UI_UPDATE_LOADING = `${UI} UPDATE_LOADING`;
export const UI_CLEAR_LOADING = `${UI} CLEAR_LOADING`;

export const updateLoading = () => ({
	type: UI_UPDATE_LOADING
});

export const clearLoading = () => ({
	type: UI_CLEAR_LOADING
});
