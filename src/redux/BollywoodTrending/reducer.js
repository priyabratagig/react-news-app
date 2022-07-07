import { reducerCreator } from '../ReducerCreator';
import { BOLLYWOODTRENDINGSTORIES_ERR, BOLLYWOODTRENDINGSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    set: BOLLYWOODTRENDINGSTORIES_SET,
    fail: BOLLYWOODTRENDINGSTORIES_ERR,
});

export default reducer;