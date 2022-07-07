import { reducerCreator } from '../ReducerCreator';
import { INTERNATIONALSTORIES_ERR, INTERNATIONALSTORIES_SET } from './actionTypes';

export const reducer = reducerCreator({
    set: INTERNATIONALSTORIES_SET,
    fail: INTERNATIONALSTORIES_ERR,
});

export default reducer;