import { reducerCreator } from '../ReducerCreator';
import { TECHSTORIES_ERR, TECHSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    fail: TECHSTORIES_ERR,
    set: TECHSTORIES_SET,
});

export default reducer;