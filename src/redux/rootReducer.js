import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import auth from './auth/authReducer';
import productReducer from './productPage/reducer';
import cartReducer from './cartPage/reducer';
import { SIGN_OUT } from './auth/authTypes';

const appReducer = combineReducers({
    auth,
    productReducer,
    cartReducer,
});

const rootReducer = (state, action) => {
    if (action.type === SIGN_OUT) {
        storage.removeItem('persist:root')
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export default rootReducer;