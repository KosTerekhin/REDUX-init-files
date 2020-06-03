import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
