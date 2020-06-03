import { combineReducers } from 'redux';

import heroReducer from './reducers/hero.reducer';
import notificationsReducer from './reducers/notifications.reducer';
import uiReducer from './reducers/ui.reducer';
import { undoable } from './echancers/undo.echnacer';

export default combineReducers({
	hero: heroReducer,
	notifications: notificationsReducer,
	ui: undoable(uiReducer)
});
