import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from './Redux/reducers.js';
import { BrowserRouter } from 'react-router-dom';
import firebaseConfig from './firebaseConfig.js';

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
	userProfile: "Users",
	useFirestoreForProfile: true,
};

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
	  <Provider store={store}>
		  <ReactReduxFirebaseProvider {...rrfProps}>
			  <BrowserRouter>
			  	<App />
			  </BrowserRouter>
		  </ReactReduxFirebaseProvider>
	  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
