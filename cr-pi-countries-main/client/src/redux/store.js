import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';
import reducer from './reducer.js';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
//agrege en el package.json "redux-devtools-extension": "^2.13.9"
//para crear mi tienda de esta manera


export default store;