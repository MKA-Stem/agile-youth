import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import App from 'pages/App';
import {BrowserRouter as Router} from "react-router-dom";

// Global styles
// import 'index.css';

// Create Redux store
import reducer from "state";
const store = createStore(reducer, applyMiddleware(thunk));

// For debugging
if(process.env.NODE_ENV !== "production"){
  window.store = store
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
  document.getElementById('root')
);
