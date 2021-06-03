import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/reducers/rootReduser";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {rootSaga} from "./redux/saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
