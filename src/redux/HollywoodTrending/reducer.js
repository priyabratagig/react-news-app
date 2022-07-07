import { reducerCreator } from '../ReducerCreator';
import { HOLLYWOODTRENDINGTORIES_ERR, HOLLYWOODTRENDINGTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    fail: HOLLYWOODTRENDINGTORIES_ERR,
    set: HOLLYWOODTRENDINGTORIES_SET,
});

export default reducer;