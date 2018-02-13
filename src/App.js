import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyADO4cX9sjBwDkXnY21WWDfvhN6KWRdAFc',
      authDomain: 'manager-f2bff.firebaseapp.com',
      databaseURL: 'https://manager-f2bff.firebaseio.com',
      projectId: 'manager-f2bff',
      storageBucket: 'manager-f2bff.appspot.com',
      messagingSenderId: '637582798903'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
