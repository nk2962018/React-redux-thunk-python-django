import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// 4. import Provider
import { Provider } from 'react-redux';

// 1. create store
import { createStore ,applyMiddleware} from 'redux'
// 3. induce the reducer

// using thunk
import thunk from 'redux-thunk'
import rootReducer from './store/reducer/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk)); // a reducer will be passed here

// ReactDOM.render(
//   <React.StrictMode>
//    <Provider store={store}> <App /> </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  
   <Provider store={store}> <App /> </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
