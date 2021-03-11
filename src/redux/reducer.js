let initialState = {
    page: 1 ,
    count: 10,
    data: []
};
export default function reducer(state = initialState, action) {
    if (action.type === 'CHANGE_PAGE') {
        return ({
            ...state,
            page: action.payload.page 
        });
    } else if(action.type === 'CHANGE_COUNT') {
        return ({
            ...state,
            count: action.payload.count < 1 ? 1 : action.payload.count > 100 ? 100 : action.payload.count
        });
    } else if(action.type === 'SET_DATA') {
        return ({
            ...state,
            data: action.payload.images
        });
    }
    return state;
}