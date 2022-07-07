import { reducerCreator } from '../ReducerCreator';
import { FOODSTORIES_ERR, FOODSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    fail: FOODSTORIES_ERR,
    set: FOODSTORIES_SET,
});

export default reducer;