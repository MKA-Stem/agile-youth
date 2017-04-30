import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from 'pages/App';

// Global styles
// import 'index.css';

// Create Redux store
import reducer from "state";
const store = createStore(reducer);

// For debugging
if(process.env.NODE_ENV === "production"){
  window.store = store
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
