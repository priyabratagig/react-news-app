import { reducerCreator } from '../ReducerCreator';
import { FOODTRENDINGSTORIES_ERR, FOODTRENDINGSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    fail: FOODTRENDINGSTORIES_ERR,
    set: FOODTRENDINGSTORIES_SET,
});

export default reducer;