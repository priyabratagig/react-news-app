import { reducerCreator } from '../ReducerCreator';
import { TECHTRENDINGSTORIES_ERR, TECHTRENDINGSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    fail: TECHTRENDINGSTORIES_ERR,
    set: TECHTRENDINGSTORIES_SET,
})

export default reducer;