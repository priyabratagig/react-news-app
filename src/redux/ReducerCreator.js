const initialState = [];

export const reducerCreator = ({ set, fail }) => (preState = initialState, action) => {
    switch (action.type) {
        case set:
            return [...action.payload];
        case fail:
            const { length } = preState;
            const newErrorPosts = action.payload.slice(length);
            return [...preState, ...newErrorPosts]
        default:
            return preState;
    }
};