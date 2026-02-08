import { applyMiddleware, compose, createStore } from 'redux'
import root from '.';
import { thunk } from 'redux-thunk'
import WeatherReducer from './reducers/WeatherReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



const store = createStore(
     WeatherReducer,
     compose(
          applyMiddleware(thunk),
          ReactReduxDevTools
     )
);

export default store