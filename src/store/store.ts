import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from "../reducers/authReducers";

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer
});

export type AppState = ReturnType<typeof reducers>

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
