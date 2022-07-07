import { reducerCreator } from '../ReducerCreator'
import { BOLLYWOODSTORIES_ERR, BOLLYWOODSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    set: BOLLYWOODSTORIES_SET,
    fail: BOLLYWOODSTORIES_ERR,
});

export default reducer;