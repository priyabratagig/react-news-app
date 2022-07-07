import { reducerCreator } from '../ReducerCreator';
import { NATIONALSTORIES_ERR, NATIONALSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    set: NATIONALSTORIES_SET,
    fail: NATIONALSTORIES_ERR,
});

export default reducer;