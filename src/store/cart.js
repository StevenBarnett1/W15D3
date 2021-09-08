import produceData from '../mockData/produce.json';

const ADD = 'cart/ADD';
const REMOVE = 'cart/REMOVE';

export const populateCart = (id) => {
    return {
        type: ADD,
        id
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE,
        id
    }
}

const cartReducer = (state = {}, action) => {
    const newState = {...state};
    switch (action.type){
        case ADD:
            if (newState[action.id]) newState[action.id].count++
            else newState[action.id] = {"id" : action.id, "count" : 1}
            return newState
        case REMOVE:
            newState[action.id] && delete newState[action.id];
            return newState
        default:
            return state;
    }
}

export default cartReducer
