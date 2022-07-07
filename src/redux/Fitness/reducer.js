import { reducerCreator } from '../ReducerCreator';
import { FITNESSSTORIES_ERR, FITNESSSTORIES_SET, } from './actionTypes';

export const reducer = reducerCreator({
    fail: FITNESSSTORIES_ERR,
    set: FITNESSSTORIES_SET,
});

export default reducer;