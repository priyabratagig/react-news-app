import { reducerCreator } from '../ReducerCreator';
import { BUSINESSTORIES_ERR, BUSINESSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    set: BUSINESSTORIES_SET,
    fail: BUSINESSTORIES_ERR,
});

export default reducer;