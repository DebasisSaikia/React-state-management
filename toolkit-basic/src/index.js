import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user';

const store=configureStore({
  reducer:{
    user:userReducer
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
