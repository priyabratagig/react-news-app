import { reducerCreator } from '../ReducerCreator';
import { ENTERTAINMENTSTORIES_ERR, ENTERTAINMENTSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    set: ENTERTAINMENTSTORIES_SET,
    fail: ENTERTAINMENTSTORIES_ERR,
});

export default reducer;