import { updateHeroesData, setHeroesError, HERO_URL, HERO, HERO_FETCH } from '../../actions/hero.actions';
import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { updateLoading, clearLoading } from '../../actions/ui.actions';
import { updateNotification } from '../../actions/notifications.actions';

export const heroMiddleware = () => (next) => (action) => {
	next(action);

	switch (action.type) {
		case HERO_FETCH:
			next(updateLoading());
			next(apiRequest(null, { url: HERO_URL, method: 'GET', feature: HERO }));
			break;
		case `${HERO} ${API_SUCCESS}`:
			next(updateHeroesData(action.payload, 15, HERO));
			// next(clearLoading());
			next({ type: 'UNDO' });
			next(updateNotification('all data fetched', HERO));
			break;

		case `${HERO} ${API_ERROR}`:
			next(setHeroesError(action.payload));
			next(clearLoading());

			next({ type: 'UNDO' });
			break;
	}
};
