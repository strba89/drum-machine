import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import drumReducer from './drum/reducer';
import controllerReducer from "./controller/reducer";
import cardReducer from './card/reducer'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['drum_data']
};

const rootReducer = combineReducers({
    drum: drumReducer,
    controller: controllerReducer,
    card: cardReducer
});

export default persistReducer(persistConfig, rootReducer);