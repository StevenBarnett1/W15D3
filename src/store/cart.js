import produceData from '../mockData/produce.json';

const ADD = 'cart/ADD';
const REMOVE = 'cart/REMOVE';
const DECREMENT = 'cart/DECREMENT'
const PURCHASE = 'cart/PURCHASE'

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

export const decrementItem = (id) => {
    return {
        type:DECREMENT,
        id
    }
}

export const purchase = (id) => {
    return {
        type:PURCHASE
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
        case DECREMENT:
            if (newState[action.id].count>1) newState[action.id].count--
            else delete newState[action.id]
            return newState
        case PURCHASE:
            return {}
        default:
            return state;
    }
}

export default cartReducer
