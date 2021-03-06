import { createStore, combineReducers } from 'redux';
import {Dishes} from './dishes';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import {Comments} from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders:Leaders
        })
    );

    return store;
}