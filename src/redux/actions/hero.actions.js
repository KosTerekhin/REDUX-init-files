export const HERO = '[hero]';
export const HERO_FETCH = 'HERO_FETCH';
export const HERO_UPDATE_STORE = `${HERO} UPDATE_STORE`;
export const HERO_SET_ERROR = `${HERO} SET_ERROR`;
export const HERO_URL = 'https://practice-crud.herokuapp.com/api/superheroes';

export const fetchHeroes = () => ({
	type: HERO_FETCH
});

export const updateHeroesData = (payload, normalizedId, feature) => ({
	type: HERO_UPDATE_STORE,
	payload,
	meta: {
		normalizedId,
		feature
	}
});

export const setHeroesError = (payload) => ({
	type: HERO_SET_ERROR,
	payload
});
