import { reducerCreator } from '../ReducerCreator';
import { FITNESSTRENDINGSTORIES_ERR, FITNESSTRENDINGSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    fail: FITNESSTRENDINGSTORIES_ERR,
    set: FITNESSTRENDINGSTORIES_SET,
});

export default reducer;