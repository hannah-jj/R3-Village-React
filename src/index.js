import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
	<Provider store={store}>
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>
	</Provider>, 
	document.getElementById('root')
	);

registerServiceWorker();
