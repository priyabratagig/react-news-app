import { reducerCreator } from '../ReducerCreator';
import { HOLLYWOODSTORIES_ERR, HOLLYWOODSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    fail: HOLLYWOODSTORIES_ERR,
    set: HOLLYWOODSTORIES_SET,
});

export default reducer;