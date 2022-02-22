import {combineReducers} from 'redux';
import CakeReducer from './cakes/CakeReducer';
import IceCreamReducer from './iceCream/IceCreamReducer';
import { userReducer } from './users/userReducer';

const rootReducer=combineReducers({
    cake:CakeReducer,
    iceCream: IceCreamReducer,
    users:userReducer,
})

export default rootReducer


