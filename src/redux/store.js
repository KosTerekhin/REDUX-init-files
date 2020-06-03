import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root.reducer';

import { heroMiddleware } from './middleware/specific/hero.middleware';
import { apiMiddleware } from './middleware/general/api.middleware';
import { normilizeMiddleware } from './middleware/general/normalize.middleware';
import { notificationsMiddleware } from './middleware/general/notifications.middleware';

const specificMiddleware = [ heroMiddleware ];
const generalMiddleware = [ apiMiddleware, normilizeMiddleware, notificationsMiddleware ];

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...specificMiddleware, ...generalMiddleware))
);

export default store;
