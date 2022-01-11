import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
// import logger from "redux-logger";
import rootReducer from '../rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'persist-store',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export const persistor = persistStore(store);

export default store;
