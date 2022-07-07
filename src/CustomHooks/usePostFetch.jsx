import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { mapStateToAsyncAction } from '../redux'

export const usePostFetch = (stateName = '', items = 0) => {
    const state = useSelector((state) => state[stateName]);
    const dispatch = useDispatch();
    useEffect(() => {
        const timeOut = setTimeout(() => {
            dispatch(mapStateToAsyncAction(stateName)(items));
        }, 250);
        return () => clearTimeout(timeOut);
    }, [stateName, items, dispatch]);
    const requiredProxyPost = items > state.length ? items - state.length : 0;
    const proxyPosts = new Array(requiredProxyPost).fill({ loading: true });
    return [[...state, ...proxyPosts], dispatch]
}

export default usePostFetch;