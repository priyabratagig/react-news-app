import { reducerCreator } from '../ReducerCreator';
import { TOPSTORIES_ERR, TOPSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    set: TOPSTORIES_SET,
    fail: TOPSTORIES_ERR,
});

export default reducer;